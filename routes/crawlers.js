/**
 * 主页及其用户中心的路由控制中枢
 * **/
// var _=require('underscore');
//var Ports = ;//前后端接口文件路由
//var Rendering =;//前端页面渲染的路由
//var Ports = require('./User/Ports');//前后端接口文件路由

//引入underscore工具类函数，把两个对象合并成一个对象
//var obj= _.extend(Ports,Rendering);
//然后把这个对象接口吐出给appjs也就是入口js
//console.dir(obj);

module.exports={
    "/rendering": require('./crawlers/rendering') ,
    "/ports":require('./crawlers/ports')
};
