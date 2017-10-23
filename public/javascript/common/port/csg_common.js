/**
 * Created by wangchaochao on 2016/11/19.
 */
;
! function() {
    CSG.port.csg_common = {
        init: function() {
            this.csg_session_login_header();
            this.bindEvent();
        },
        //绑定事件处理
        bindEvent: function() {//
            this.bind_Click_Event();
        },
        //绑定各种事件处理
        bind_Click_Event: function(){
            _this = this;
            //点击退出按钮直接退出
            $(document).on('click', '#clear_cookie_out', function(){
                CSG.port.csg_common.csg_sesssion_out(function(res){//不能用_this，有点莫名其妙
                    if(res.status==0){
                        window.location.href = CSG.api+"/user/rendering/login";
                    }
                });
            });

        },

        //csg_common_cookie:function() {
        //    //当前页面cookie处理
        //    var csg_login_cookie = $.cookie('csg_login_cookie');
        //    if (!csg_login_cookie || csg_login_cookie == "") {
        //        window.location.href = CSG.api + "/user/rendering/login"
        //    }
        //    var json_obj_value = JSON.parse(csg_login_cookie),
        //        nicknames = document.getElementById("nicknames"),
        //        out_btn = document.getElementById("clear_cookie_out");
        //    nicknames.innerHTML = json_obj_value.nicknames;
        //    out_btn.onclick = function () {
        //        $.cookie("csg_login_cookie", null, {path: "/"});
        //        window.location.href = CSG.api + "/user/rendering/login";
        //    };
        //    //利用权限显示隐藏数据分析跟数据获取
        //    var item_number = json_obj_value.permission,
        //        litwo = document.getElementById("litwo"),
        //        lithree = document.getElementById("lithree"),
        //        navul = document.getElementById("navul");
        //    if (item_number == 3) {navul.removeChild(litwo);}
        //    if (item_number == 2) {navul.removeChild(lithree);}
        //},
        //sesstiong公共导航
        csg_session_login_header:function(){
            var url=CSG.api+"/user/ports/port_common_header",
                JsonOdata = {},
                success=function (res){
                    //console.log(res,"这里是成功请求");
                    var nicknames = document.getElementById("nicknames");
                    nicknames.innerHTML=res.personinfo.nicknames;
                    item_number = res.personinfo.permission,
                        litwo = document.getElementById("litwo"),
                        lithree = document.getElementById("lithree"),
                        navul = document.getElementById("navul");
                    if (item_number == 3) {navul.removeChild(litwo);}
                    if (item_number == 2) {navul.removeChild(lithree);}
                },
                error=function(res){
                    console.log(res,"这里是失败请求");//当后台没有设置正确接口格式的时候，走的是这个func
                };
            CSG.common.tool.ajax.post(url, JsonOdata, success, error);
        },
        //session退出
        csg_sesssion_out:function(callback){
            var url=CSG.api+"/user/ports/port_out",
                JsonOdata = {
                    "permission":item_number
                },
                success=function (res){
                    //console.log(res,"这里是成功请求");
                    callback && callback(res);
                },
                error=function(res){
                    console.log(res,"这里是失败请求");//当后台没有设置正确接口格式的时候，走的是这个func
                };
            CSG.common.tool.ajax.post(url, JsonOdata, success, error);
        }
    }
}();
