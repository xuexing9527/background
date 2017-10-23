/**
 *
 * 一个处理后台请求接口的集合文件
 *
 * **/
//获取不同模块处理接口的js文件
var express = require('express');
var router = express.Router();
var Fiber = require('fibers');
var http = require('superagent');
//var IP = 'http://192.168.1.105:9000';
//var IP=require('./../../config/ip');
var IP={
    ip:conf.ipAna
};
var CSG_node = require('../../modules/common/tool');//引入后台的工具处理函数

/* post 这里处理前端的数据接口 /前端传过来的数据格式必须是json格式，而且后台传给前端也必须是json格式的，否则前端ajax那里把结果返回给error方法里。
   数据分析接口
* */
router
    .post('/port_dataAnalysis', function(req, res, next) {
        Fiber(
            function () {
                var sendMsg = '';//发送到前端的信息
                var transfer = req.body;//中转信息，由前端发送给node后台，准备发送给scale的信息
                var httpFiber = Fiber.current;//当前纤程对象
                http.post(IP.ip + '/DataAnalysis/meta')
                    .set('Content-Type', 'application/json')
                    .send(transfer)
                    .end(function(error,response){
                        sendMsg = response.text;//发送给回来的信息
                        httpFiber.run();
                    });
                Fiber.yield();
                res.send(sendMsg);
            }
        ).run();
    })
    .post('/port_dataAnalysisDetails', function(req, res, next) {
        Fiber(
            function () {
                var sendMsg = '';//发送到前端的信息
                var transfer = req.body;//中转信息，由前端发送给node后台，准备发送给scale的信息
                var httpFiber = Fiber.current;//当前纤程对象
                http.post(IP.ip + '/DataAnalysis/master')
                    .set('Content-Type', 'application/json')
                    .send(transfer)
                    .end(function(error,response){
                        sendMsg = response.text;//发送给回来的信息
                        httpFiber.run();
                    });
                Fiber.yield();
                res.send(sendMsg);
            }
        ).run();
    })
    .post('/csg_functionsql', function(req, res, next) {
        Fiber(
            function () {
                var sendMsg = '';//发送到前端的信息
                var transfer = req.body;//中转信息，由前端发送给node后台，准备发送给scale的信息
                var httpFiber = Fiber.current;//当前纤程对象
                http.post(IP.ip + '/DataAnalysis/mart')
                    .set('Content-Type', 'application/json')
                    .send(transfer)
                    .end(function(error,response){
                        sendMsg = response.text;//发送给回来的信息
                        httpFiber.run();
                    });
                Fiber.yield();
                res.send(sendMsg);
            }
        ).run();
    })
    .post('/csg_function_popup', function(req, res, next) {
        Fiber(
            function () {
                var sendMsg = '';//发送到前端的信息
                var transfer = req.body;//中转信息，由前端发送给node后台，准备发送给scale的信息
                var httpFiber = Fiber.current;//当前纤程对象
                http.post(IP.ip + '/DataAnalysis/martid')
                    .set('Content-Type', 'application/json')
                    .send(transfer)
                    .end(function(error,response){
                        sendMsg = response.text;//发送给回来的信息
                        httpFiber.run();
                    });
                Fiber.yield();
                res.send(sendMsg);
            }
        ).run();
    })
    .post('/csg_rel', function(req, res, next) {
        Fiber(
            function () {
                var sendMsg = '';//发送到前端的信息
                //var transfer = JSON.stringify( req.body );//中转信息，由前端发送给node后台，准备发送给scale的信息
                 var transfer = req.body;//中转信息，由前端发送给node后台，准备发送给scale的信息
                // console.log(transfer);
                var httpFiber = Fiber.current;//当前纤程对象
                //console.log(transfer);
                // http.post(IP.rj + '/DataAnalysis/dimension')
                http.post(IP.ip + "/DataAnalysis/dimension")
                    .set('Content-Type', 'application/json')
                    .send(transfer)
                    .end(function(error,response){
                        sendMsg = response.text;//发送给回来的信息
                        httpFiber.run();
                    });
                Fiber.yield();
                //console.log(sendMsg);
                res.send(sendMsg);
            }
        ).run();
    })
    .post('/csg_an_guanxi', function(req, res, next) {
        Fiber(
            function () {
                var sendMsg = '';//发送到前端的信息
                //var transfer = JSON.stringify( req.body );//中转信息，由前端发送给node后台，准备发送给scale的信息
                var transfer = req.body;//中转信息，由前端发送给node后台，准备发送给scale的信息
                // console.log(transfer);
                var httpFiber = Fiber.current;//当前纤程对象
                //console.log(transfer);
                // http.post(IP.rj + '/DataAnalysis/dimension')
                http.post(IP.ip + "/DataAnalysis/dimensions")
                    .set('Content-Type', 'application/json')
                    .send(transfer)
                    .end(function(error,response){
                        sendMsg = response.text;//发送给回来的信息
                        httpFiber.run();
                    });
                Fiber.yield();
                //console.log(sendMsg);
                res.send(sendMsg);
            }
        ).run();
    })
    .post('/csg_save_data',function(req, res){
        var savedata = req.body['savedata'];
        req.session.savedata=savedata;
        //console.log(req.session.savedata);
        res.send({"status":0,"des":"保存成功"});
    })
    .post('/csg_get_save_data',function(req, res){
        var token = req.body['token'];
        var savedata=req.session.savedata;
        if(token==1){
            res.send({"status":0,"des":"保存成功","savedata":savedata});
        }else{
            res.send({"status":1,"des":"失败"})
        }
    })
    .post('/csg_delete_save_data',function(req, res){
        var current_value = req.body['current_value'];
        var getdata=req.session.savedata;
        var story_value=null;
        for(var key in getdata){
            if(current_value==key){
                story_value=key;
            }
        }
        if(story_value!=""){
            delete getdata[story_value];
            res.send({"status":0,"des":"删除成功"});
        }else {
            res.send({"status":1,"des":"删除失败"});
        }
    })
    .post('/csg_sql_save_data',function(req, res){
        var sqlobj = req.body;
        req.session.sqlobj=sqlobj;
        res.send({"status":0,"des":"保存成功"});
    })
    .post('/csg_sql_get_data',function(req, res){
        var token = req.body['token'];
        var sqlobj=req.session.sqlobj;
        if(token==1){
            res.send({"status":0,"des":"保存成功","sqlobj":sqlobj});
        }else{
            res.send({"status":1,"des":"失败"})
        }
    })
    .post('/csg_sql_delete_data',function(req,res){
        var uid = req.body['uid'];
        var getdata=req.session.sqlobj;
        var story_value1=null;
        for(var key in getdata){
            if(uid==key){
                story_value1=uid;
            }
        }
        if(story_value1!=""){
            delete getdata[story_value1];
            res.send({"status":0,"des":"删除成功"});
        }else {
            res.send({"status":1,"des":"删除失败"});
        }
    })
;


module.exports = router;

