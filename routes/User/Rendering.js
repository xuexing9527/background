/**
 *
 * 一个处理渲染页面的的集合文件
 *
 * **/
//引入不同的模块渲染页面
var express = require('express');
var router = express.Router();

/* GET 主页面 */
router
    .get('/', function(req, res, next) {
        res.render('index', {title: 'Express welcome'});//user组下边的主页面 welcome//http://localhost:3000/user/rendering/
    })
    .get('/login', function(req, res, next) {//这个路径是前端页面访问路径
        //下面是访问数据库的
        //req.database.query('show databases').then(rows => console.log(rows))
        res.render('user/csg_login');//登录页面//意思是user模板下的login页面，
    })
    .get('/home', function(req, res, next) {
		//res.render('user/csg_home', { username: req.session.users.username, permission:req.session.users.permission});
        res.render('user/csg_home');
    })



;

module.exports= router;
