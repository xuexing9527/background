/**
 * Created by wangchaochao on 2016/11/17.
 */
;
! function() {
    var layer = CSG.common.tool.layer;
    CSG.port.csg_test = {
        say: function() {
            console.log("hi")
        },
        init: function() {
            this.bindEvent();
            this.say();
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
        }

    }
}();
