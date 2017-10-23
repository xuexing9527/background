/**
 * Created by xuexing on 16-12-13.
 */

/**
 * 1.已约定的数据结构，处理消息
 *
 * 2.循环的数据分别处理
 *
 */
function model(msg){
    /**
     * 自己循环的数据，首次接收的数据
     * 返回两串处理好的数据
     */

    msg = JSON.parse( msg.content );

    return msg;
}

module.exports = model;
