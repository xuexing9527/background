/**
 * 一个处理后台请求接口的集合文件,获取不同模块处理接口的js文件
 **/
var express = require('express');
var router = express.Router();
var CSG_node = require('../../modules/common/tool');//引入后台的工具处理函数

/**
 *    post 这里处理前端的数据接口,前端传过来的数据格式必须是json格式，而且后台传给前端也必须是json格式的，否则前端ajax那里把结果返回给error方法里。
 **/
router
    .post('/port_login', function(req, res) {
        //获取前端传过来的数据
        var form_username = CSG_node.tool.trim(req.body['username']);
        var form_password = CSG_node.tool.trim(req.body['password']);
        //判断是否为空，为空的话直接抛出异常
        if(form_username=="" && form_password==""){
            res.status(400).send('Bad Request,账号密码不能为空');
            return ;
        }
        //循环的读取配置中的用户账号和密码，还有权限
        delete req.session.users ;
        for( users in config.user ){
            var obj = eval("config.user."+users);
            if(obj.username===form_username && obj.password===form_password){
                var personinfo={
                    "username":obj.username,
                    "permission":obj.permission,
                    "nicknames":obj.nicknames
                };
                req.session.users = personinfo;
                res.setHeader("Access-Control-Allow-Origin", "*");//设置随便跨域，第二期的时候关闭
                //res.writeHeader(200,{
                //    'content-type':'application/json',
                //    'Access-Control-Allow-Origin' : '*',
                //    'Access-Control-Request-Method':'POST,GET,OPTIONS',
                //    'Access-Control-Request-Headers':'content-type'});
            }
        }
        if( req.session.users ){
            res.send({"status":0,"des":"登录成功","personinfo":personinfo});//ajax处理遍历数据或者模板引擎渲染，待讨论
        }else{
            res.send({"status":1,"des":"登录失败"});
        }
    })
    .post('/port_register', function(req, res) {
        console.log(req.body);
        res.status(200);
        res.send({"x":1});//后台必须返回json格式
    })
    .post('/port_common_header',function(req, res){//处理导航页的用户权限
        personinfo= req.session.users;
        res.send({"status":0,"des":"登录成功","personinfo": personinfo});
    })
    .post('/port_out',function(req, res){//处理退出接口
        var permission = req.body['permission'];
        for( users in config.user ){
            var obj = eval("config.user."+users);
            if(obj.permission==permission){
                delete req.session.users;
                res.send({"status":0,"des":"退出成功"});
                return;
            }else {
                res.send({"status":1,"des":"退出失败"});
                return;
            }
        }
    })





;

module.exports = router;
