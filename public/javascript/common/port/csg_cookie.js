/**
 * Created by wangchaochao on 2016/11/19.
 */
;
! function() {
    CSG.port.csg_cookie = {
        say: function() {
            console.log("hi，主页面")

        },
        init: function() {
            this.bindEvent();
           // this.say();
            this.get_cookie();
        },
        //绑定事件处理
        bindEvent: function() {//
            this.bind_Click_Event();
        },
        //绑定各种事件处理
        bind_Click_Event: function(){
            _this=this;
            $(document).on('click', '', function(){

            })
        },
        //获得各种数据
        getData: function() {
            CSG.common.tool.ajax.post(url, data, success, error);
        },
        get_cookie:function(){
            var csg_login_cookie=$.cookie('csg_login_cookie');
            if(csg_login_cookie){
                window.location.href = CSG.api+"/user/rendering/home" ;
            };
        }



    }
}();
