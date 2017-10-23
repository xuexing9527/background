/**
 *
 * 一个处理后台请求接口的集合文件
 *
 * **/
//获取不同模块处理接口的js文件
var express = require('express');
var router = express.Router();
var CSG_node = require('../../modules/common/tool');//引入后台的工具处理函数

/* post 这里处理前端的数据接口 /前端传过来的数据格式必须是json格式，而且后台传给前端也必须是json格式的，否则前端ajax那里把结果返回给error方法里。
   数据分析接口
* */
router
    .post('/port_reportQuery', function(req, res, next) {
        //console.log(req.body);
        //res.status(200);
        //res.send({"x":1});//后台必须返回json格式
    })

;


module.exports = router;

