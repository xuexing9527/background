/**
 * Created by wangchaochao on 2016/12/8.
 */
;
! function() {
    var layer = CSG.common.tool.layer;
    CSG.port.csg_dataAnalysisDetails = {
        say: function() {
            console.log("hi")
        },
        init: function() {
            this.bindEvent();
            this.say();



            $(function() {
                $("#page").Page({
                    totalPages: 9,
                    //分页总数
                    liNums: 7,
                    //分页的数字按钮数(建议取奇数)
                    activeClass: 'activP',
                    //active 类样式定义
                    callBack: function(page) {
                        //console.log(page)
                    }
                });
            });




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
