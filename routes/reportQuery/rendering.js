/**
 *
 * 一个处理渲染页面的的集合文件
 *
 * **/
//引入不同的模块渲染页面
var express = require('express');
var router = express.Router();

/* GET 数据分析页面 ****目前三个页面创建报告，查询报告，报告详情********/
router
    .get('/reportCreate', function(req, res, next) {//这个路径是前端页面访问路径
        res.render('reportQuery/csg_reportCreate');//
    })
    .get('/reportQuery', function(req, res, next) {
        res.render('reportQuery/csg_reportQuery');
    })
    .get('/reportDetails', function(req, res, next) {
        res.render('reportQuery/csg_reportDetails');
})



;
module.exports= router;



