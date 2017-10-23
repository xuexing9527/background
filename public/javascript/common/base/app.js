/**
 * Created by wangchaochao on 2016/11/17.
 * 业务域入口文件
 */
;
!function(){
    /*
    * add url test 添加url测试地址
    * param LOCAL 本地环境
    * param TEST 测试环境
    * param ONLINE 线上正式环境
    *
    * */
    var ENV = {
        LOCAL: 'LOCAL',
        TEST: 'TEST',
        ONLINE: 'ONLINE'
    };

    // init app obj 创建全局作用域的业务域对象
    var CSG = window.CSG = {};
    // add public component logic 添加公共函数部分使用
    CSG.common = {};
    // add logic 添加自己写的接口
    CSG.port = {};
    // 开发环境
    CSG.env = ENV.LOCAL;

    // api url
    CSG.api = (function(env){
        //if(env == ENV.LOCAL) return "http://36.111.132.104:9298";
        //if(env == ENV.LOCAL) return "http://192.168.1.101:9298";
        //if(env == ENV.LOCAL) return "http://localhost:9298";
		 if(env == ENV.LOCAL) return "http://127.0.0.1:9298";
        if(env == ENV.TEST) return "";
        if(env == ENV.ONLINE) return "";
    })(CSG.env)


}();



