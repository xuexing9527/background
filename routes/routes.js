var express = require('express');
var router = express.Router();

/* 这个项目的主页。也是测试页面，暂时没有引用，无用状态 */
router
    .get('/', function(req, res, next) {
        res.render('index', {title: 'Express welcome'});//主页面 welcome
    })

;

//module.exports = router;
