/**
 * Created by xuexing on 16-11-26.
 */

var express = require('express'),
    amqp = require('amqplib'),
    http = require('http'),
    cheerio = require('cheerio'),

    MSG = require('./msg'),
    MODEL = require('./../model/model'),
    CASPER = require('./../controller/run'),

    kafka = require('kafka-node'),
    Producer = kafka.Producer,
    KeyedMessage = kafka.KeyedMessage,
    client = new kafka.Client("zookeeper:2181","kafka-node-client2"),
    producer = new Producer(client);

/*
// 延迟启动
function sleep(milliSeconds) {
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + milliSeconds);
};
sleep(25000);
*/
/**
 * 第一次发送数据，启动
 *
 * 此过程本不需要，旨模拟  任务下达 第一个消息 @yanwei
 * @type {{url: string, referUrlArr: string[], path: number}}
 *
 */
var firstMsg = {url:'http://www.amg-china.com/m/home_cn.html',referUrlArr:['/'],path:4};
var sendMQMsg = new MSG(firstMsg);
sendMQMsg.run();//发送消息


//启动MQservice
amqp.connect('amqp://user:password@172.17.0.2/my_vhost').then(function(conn) {
    process.once('SIGINT', function() { conn.close(); });
    return conn.createChannel().then(function(ch) {
        var ok = ch.assertQueue('qt8', {arguments:{durable: true,'x-max-priority': 254}});
        ok = ok.then(function(_qok) {
            return ch.consume('qt8', function(msg) {
                msg = MODEL(msg);  //处理数据结构,符合接口端参数
                CASPER(msg.url,msg.referUrlArr,msg.path);  //抓取功能
            }, {noAck: true});
        });
        return ok.then(function(_consumeOk) {
           console.log(' [*] Waiting for messages. To exit press CTRL+C');
        });
    });
}).catch(console.warn);

