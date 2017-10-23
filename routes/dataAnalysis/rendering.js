/**
 *
 * 一个处理渲染页面的的集合文件
 *
 * **/
//引入不同的模块渲染页面
var express = require('express');
var router = express.Router();

/* GET 数据分析页面 */
router
    .get('/dataAnalysis', function(req, res, next) {//这个路径是前端页面访问路径    分析页面
        res.render('dataAnalysis/csg_dataAnalysis');//
    })
    .get('/dataAnalysisRel', function(req, res, next) {//这个路径是前端页面访问路径    分析页面
        res.render('dataAnalysis/csg_dataAnalysisRel');//
    })
    .get('/dataAnalysisDetails', function(req, res, next) {
        res.render('dataAnalysis/csg_dataAnalysisDetails');//数据分析详情,暂时么有
    })
    .get('/functionAnalysis', function(req, res, next) {
        res.render('dataAnalysis/csg_functionAnalysis');//函数分析
    })
    .get('/importData', function(req, res, next) {
        res.render('dataAnalysis/csg_importData');//导入数据
    })
    .get('/importDataDetails', function(req, res, next) {
        res.render('dataAnalysis/csg_importDataDetails');//导入数据详情,暂时没有
    })
    .get('/test', function(req, res, next) {
        res.render('dataAnalysis/test');//导入数据详情，暂时没有
    })
    .get('/tests', function(req, res, next) {
        res.render('dataAnalysis/tests');//less小案例页面
    })

;
module.exports= router;



