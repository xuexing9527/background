;
! function() {
    CSG.port.csg_importDataDetails = {
        say: function() {
            console.log("hi，主页面")
        },
        init: function() {
            this.bindEvent();
            this.say();

            $(document).ready(function() {
                $(".btnnetwork").click(function() { //点击one的时候
                    $(".querylist").hide(); //A1隐藏
                    $(".querypic").show(); //A2显示
                });
                $(".btnnetform").click(function() { //点击two的时候
                    $(".querypic").hide(); //A2隐藏
                    $(".querylist").show(); //A1显示
                });
            });

            $(function() {
                $("#page").Page({
                    totalPages: 8,
                    //分页总数
                    liNums: 5,
                    //分页的数字按钮数(建议取奇数)
                    activeClass: 'activP',
                    //active 类样式定义
                    callBack: function(page) {
                        //console.log(page)
                    }
                });
            })

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

