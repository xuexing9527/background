/**
 * Created by xuexing on 16-12-12.
 */

var http = require('http');
var cheerio = require('cheerio');
var EXPORT = require('./export');
var HANDEL = require('./handel');
var DETERMINE = require('./determine');

var mySet = new Set(),
    i = 0,//执行了多少次
    statusError = [],
    contentType = [];

//爬虫方法/*参数有变*/
function casper(url, refererUrlArr, path) {
    if (--path < 0) return //控制递归深度
    http.
    get(url, function (res) {
        var html = '';
        var status = DETERMINE(url,res,contentType,statusError,refererUrlArr,i);
        if(status) {console.log(status); return;}  //http判定
        res.setEncoding('utf-8') //编码格式
            .on('data', function (chunk){html += chunk;})
            .on('end', function () {
                HANDEL(cheerio.load(html),url,refererUrlArr,path,mySet);  //筛选出继续抓取的url
                // EXPORT();  //第二部分  内容分析 连接kafka
            });
    }).
    on('error', function (err){console.log(err);});
}

module.exports = casper;
