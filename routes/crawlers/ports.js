var express = require('express');
var router = express.Router();
var Fiber = require('fibers');
// var CSG_node = require('../../modules/common/tool');//引入后台的工具处理函数
var http = require('superagent');
var IP = conf.ipCra;
router
    .post('/addTask', function(req, resp, next) {
        Fiber(
            function () {
                var sendMsg = '', s = req.body, httpFiber = Fiber.current;
                s = JSON.stringify(s);
                http.post(IP + '/crawler/entering')
                    .set('Content-Type', 'application/json')
                    .send(s)
                    .end(function(err,res){
                        sendMsg = res.text;
                        httpFiber.run();
                    });
                Fiber.yield();
                resp.send(sendMsg);
            }
        ).run();
    })
    .get('/jobList', function(req, resp, next) {
        Fiber(
            function () {
                var sendMsg = '', s = req.query, httpFiber = Fiber.current;
                http.get(IP + '/crawler/crawlerGet/' + s.pageStart + '/' + s.pageEnd )
                    .end(function(err,res){
                        sendMsg = res.text;
                        httpFiber.run();
                    });
                Fiber.yield();
                resp.send(sendMsg?sendMsg:'');
            }
        ).run();
    })
    .get('/jobGetOne', function(req, resp, next) {
        Fiber(
            function () {
                var sendMsg = '', s = req.query, httpFiber = Fiber.current;
                http.get(IP + '/crawler/crawlerGetOne/' + s.jobId)
                    .end(function(err,res){
                        sendMsg = res.text;
                        httpFiber.run();
                    });
                Fiber.yield();
                resp.send(sendMsg);
            }
        ).run();
    })
    .get('/jobInstence', function(req, resp, next) {
        Fiber(
            function () {
                var sendMsg = '', s = req.query, httpFiber = Fiber.current;
                http.get(IP + '/TaskInstance/instance/' + s.jobId )
                    .end(function(err,res){
                        sendMsg = res.text;
                        httpFiber.run();
                    });
                Fiber.yield();
                resp.send(sendMsg);
            }
        ).run();
    })
    .get('/jobInstenceList', function(req, resp, next) {
        Fiber(
            function () {
                var sendMsg = '', s = req.query, httpFiber = Fiber.current;
                http.get(IP + '/TaskInstance/taskInstanceGet/' + s.jobId + "/" + -1 + "/" + -1 + "/1/100") // -1~-1默认查所有实例
                    .end(function(err,res){
                        sendMsg = res.text;
                        httpFiber.run();
                    });
                Fiber.yield();
                resp.send(sendMsg);
            }
        ).run();
    })
    .get('/jobInstenceOne', function(req, resp, next) {
        Fiber(
            function () {
                var sendMsg = '', s = req.query, httpFiber = Fiber.current;
                http.get(IP + '/content/contentGet/' + s.eId + "/-1/-1/" + s.ps + "/" + s.pe)
                    .end(function(err,res){
                        sendMsg = res.text;
                        httpFiber.run();
                    });
                Fiber.yield();
                resp.send(sendMsg);
            }
        ).run();
    })
    .get('/grapTextDetail', function(req, resp, next) {
        Fiber(
            function () {
                var sendMsg = '', s = req.query, httpFiber = Fiber.current;
                http.get(IP + '/content/contentGetOne/' + s.cId)
                    .end(function(err,res){
                        sendMsg = res.text;
                        httpFiber.run();
                    });
                Fiber.yield();
                resp.send(sendMsg);
            }
        ).run();
    })
    .get('/TaskInstance/taskInstanceOrder/', function(req, resp, next) {
        Fiber(
            function () {
                var sendMsg = '', s = req.query, httpFiber = Fiber.current;
                http.get(IP + '/TaskInstance/taskInstanceOrder/' + s.limit)
                    .end(function(err,res){
                        sendMsg = res.text;
                        httpFiber.run();
                    });
                Fiber.yield();
                resp.send(sendMsg);
            }
        ).run();
    })
;
module.exports = router;
