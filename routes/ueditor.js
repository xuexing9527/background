/******
 * nodejs 中配置 ueditor 富文本编辑器的后台配置
 * 也是核心文件
 *
 *
 * ******/

var express = require('express');
var path = require('path');
var router = express.Router();
var ueditor = require("ueditor");

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('csg_ue', { title: 'HelloWord' })
})
    .all("/ueditor", ueditor(path.join(__dirname, '../public'), function (req, res, next) {
        //客户端上传文件设置
        var ActionType = req.query.action;
        if (ActionType === 'uploadimage' || ActionType === 'uploadfile' || ActionType === 'uploadvideo') {
            var file_url = '/images/upload/ueditorde/';//默认图片上传地址
            /*其他上传格式的地址*/
            if (ActionType === 'uploadfile') {
                file_url = '/files/ueditor/'; //附件
            }
            if (ActionType === 'uploadvideo') {
                file_url = '/video/upload/ueditor/'; //视频
            }
            res.ue_up(file_url); //你只要输入要保存的地址 。保存操作交给ueditor来做
            res.setHeader('Content-Type', 'text/html');
        }
        //  客户端发起图片列表请求
        else if (req.query.action === 'listimage') {
            var dir_url = '/images/upload/ueditor/';
            res.ue_list(dir_url); // 客户端会列出 dir_url 目录下的所有图片
        }
        // 客户端发起其它请求
        else {
            // console.log('config.json')
            res.setHeader('Content-Type', 'application/json');
            //res.redirect('/javascript/common/ueditor/php/config.json');
            res.redirect('/javascript/common/src/utf8-php/php/config.json');
            //后台读取ueditor的路径配置，其实就是ueditor的文件
        }
}));


module.exports = router;
