/**
 * Created by xuexing on 16-12-12.
 */

var amqp = require('amqplib');

function MSG(obj) {
    this.msg = {};
    this.msg.url = obj.url;
    this.msg.referUrlArr = obj.referUrlArr;
    this.msg.path = obj.path;
    this.run = function () {
        var me = this;
        amqp.connect('amqp://user:password@172.17.0.2/my_vhost')
            .then(function(conn) {
                return conn.createChannel(  {arguments:{'x-max-priority': 254}} ).then(function(ch) {
                    var q = 'qt8';
                    var ok = ch.assertQueue(q, {arguments:{durable: true,'x-max-priority': 254}  });
                    return ok.then(function(_qok) {
                        console.log( '发送端' +  JSON.stringify( me.msg ));
                        ch.sendToQueue( q, new Buffer( JSON.stringify( me.msg )));
                        return ch.close();
                    });
                }).finally(function() { conn.close(); });     }).catch(console.warn);
    }
}

module.exports = MSG;
