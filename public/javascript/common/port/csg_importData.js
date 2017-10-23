/**
 * Created by wangchaochao on 2016/12/8.
 */
/**
 * Created by wangchaochao on 2016/11/19.
 */
;
! function() {
    CSG.port.csg_importData = {
        say: function() {
            console.log("hi，主页面")
        },
        init: function() {
            this.bindEvent();
            this.say();


            $("#navul li:eq(1)").addClass("current");//header导航部分
            $(".leftul li:eq(2)").addClass("current_left");//左侧导航部分
        },
        //绑定事件处理
        bindEvent: function() {//
            this.bind_Click_Event();
            $("#navul li:eq(1)").addClass("current");
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


    var check=document.getElementById("importdata_tbody");
    var checkAll=document.getElementById("checkAll");
    var checkAlls=importdata_tbody.getElementsByTagName("input")
    checkAll.onclick=function(){
            for (var i = 0; i < checkAlls.length; i++) {
                if (checkAlls[i].checked == true) {
                    checkAlls[i].checked = false;
                } else {
                    checkAlls[i].checked = true;
                }
            }
        }

    }();

