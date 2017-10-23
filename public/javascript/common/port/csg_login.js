/**
 *
 * Created by wangchaochao on 2016/11/17.
 * 登录模块
 *
 **/
;
! function() {
    CSG.port.csg_login = {
        say: function() {
            console.log("hi")
        },
        init: function() {
            this.bindEvent();
            //this.say();
        },
        //绑定事件处理
        bindEvent: function() {
            this.bind_Click_Event();
            this.bind_Check_Event();
        },
        //绑定各种事件处理
        bind_Click_Event: function(){
            _this=this;
            $(document).on('click', '#login_submit', function(e){
                e.preventDefault();//取消事件默认行为，不让登录按钮具有跳转功能，另外，url跳转是前端处理的，渲染页面是后台处理的，重定向也是后台处理的
                _this.get_Login_Data(function(res){
                    if(res.status==0){
                        //var cookie_value=res.personinfo;
                        //var json_str_value=JSON.stringify(cookie_value);
                        //$.cookie('csg_login_cookie', json_str_value, { expires: 30, path: '/' });
                        window.location.href = CSG.api+"/user/rendering/home";
                    }
                });
            });
        },
        //点击前端验证账号密码
        bind_Check_Event:function(){
            $("#Form_login").validate({
                rules:{
                    login_username:{required: true, isUsername:true},
                    login_password:{required: true, isPwd:true}
                },
                messages:{
                    login_username:{required: "请输入账号", isUsername: "以字母开头，6~16位数字、字母组合"},
                    login_password:{required: "请输入密码", isPwd :"以字母开头,长度6-15位包含字母、数字或下划线"}
                }
            });
        },
        //获得登录交互数据
        get_Login_Data: function(callback) {
            var $username=$("#login_username").val();
            var $password=$("#login_password").val();
            var $password_length=$password.length;
            if($username=="" || $password=="" || $password_length < 6) return;
            var url=CSG.api+"/user/ports/port_login",
                JsonOdata = {
                    "username":$username,
                    "password":$password
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




