// 框架
var express = require('express');

// 依赖包
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');
var log4js = require('log4js');
//var mysql = require('express-database-mysql');
var database = require('express-database');


// 设置全局配置
var conIp = require("./config/ip");
global.config = require('express-load-config')('./config/');

// 导入页面路径
var user = require('./routes/user');//主页面及其用户中心
var dataAnalysis = require('./routes/dataAnalysis');//数据资产页面
var reportQuery = require('./routes/reportQuery');//报告查询页面
var crawlers = require('./routes/crawlers');//爬虫功能页面
var ueditor = require("./routes/ueditor");//引入富文本编辑器功能


// 日志框架配置
log4js.configure(global.config.log4jsConfig);
var logger = log4js.getLogger('normal');
logger.setLevel('INFO');


//实例化express对象
var app = express();
//设置模板引擎
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//日志输出
app.use(log4js.connectLogger(logger, {level:log4js.levels.INFO}));

//数据库链接
/* 12月1号，调试数据库请求 成功
 *   $> curl http://127.0.0.1:3000/dataassets/rendering/dataassets
 * github:
 *   $> https://github.com/ReklatsMasters/express-database
 *   $> https://github.com/ReklatsMasters/express-database-mysql
 */
//app.use(database({
//    db: mysql(config.db.database)
//}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cookieParser());
app.use(session({
    secret: 'CSGsystem',
    name: '_CSG',
    cookie: {maxAge: 60*60*24*7},
    resave: false,
    saveUninitialized: true
}));
//系统自带设置公共静态文件
app.use(express.static(path.join(__dirname, '/public')));


//请求拦截器，实际也是路由
//当访问登录渲染页面或者登录接口的时候直接放行，执行下面的路由，当session存在的的时候也直接放行
//如果以上条件都不存在，一直重定向登录页面，直到输入正确的账号密码为止
app.use(function(req, res, next) {
    if( req.url == '/user/rendering/login' || req.url == '/user/ports/port_login' || req.session.users != undefined){
        next();
    }else{
        //res.location('http://localhost:9298/user/rendering/login');
        //res.render('user/csg_login');
        // res.redirect('http://36.111.132.104:9298/user/rendering/login');
        //res.redirect('http://192.168.1.101:9298/user/rendering/login');
		res.redirect('http://127.0.0.1:9298/user/rendering/login');
    }


});

//路由目录设置
//用户中心
for(var key_part01 in user){app.use("/user"+key_part01, user[key_part01])}
//数据资产页面
for(var key_part02 in dataAnalysis){app.use("/dataAnalysis"+key_part02, dataAnalysis[key_part02])}
//报告查询页面
for(var key_part03 in reportQuery){app.use("/reportQuery"+key_part03, reportQuery[key_part03])}
//爬虫前端页面
for(var casper in crawlers){app.use("/crawlers"+casper, crawlers[casper])}
//富文本编辑器模块
app.use('/ue', ueditor);


//404unfound错误处理
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;

    logger.error( err );
    next(err);
});

//500错误信息处理
// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);

    logger.error( err );
    res.render('error');
});

module.exports = app;
