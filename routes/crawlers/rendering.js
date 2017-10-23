/**
 *
 * 一个处理渲染页面的的集合文件
 *
 * **/
//引入不同的模块渲染页面
var express = require('express');
var router = express.Router();

/* GET 爬虫功能页面or数据抓取页面 */
router
    .get('/addTask', function(req, res, next) {
        res.render('crawlers/csg_addTask');
    })
    .get('/taskList', function(req, res, next) {
        res.render('crawlers/csg_taskList');
    })
    .get('/instenceList', function(req, res, next) {
        res.render('crawlers/csg_instenceList');
    });
;
module.exports= router;



