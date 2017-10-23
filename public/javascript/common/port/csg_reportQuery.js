;
! function() {
    CSG.port.csg_reportQuery = {
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
            this.bind_Click_Events();
            $("#navul li:eq(3)").addClass("current");
            $(".leftul li:eq(0)").addClass("current_left");//左侧导航部分
        },
        //绑定各种事件处理
        bind_Click_Events: function(){
            _this=this;
            $(document).on('click','.query_description', function(){
                layer.open({
                    type: 1,
                    closeBtn :2,
                    area: [ '910px','630px'],
                    title: ["详情",'color:#c5ccd2;ont-weight: bold;font-size:20px;background:rgba(0,0,0,0);font-family: "Microsoft Yahei";'],
                    content:$(".query_popup"),
                    shade: [0.2],
                    success:function(){

                    }
                });
            })
        },
        bind_Click_Event: function(){
            _this=this;
            $(document).on('click', '.query-check', function(){
                layer.open({
                    type: 1,
                    closeBtn :2,
                    area: [ '910px','630px'],
                    title: ["详情", 'color:#c5ccd2;ont-weight: bold;font-size:20px;background:rgba(0,0,0,0);font-family: "Microsoft Yahei";'],
                    content:$(".query_checkBomb"),
                    shade: [0.2],
                    success:function(){

                    }
                });
            })
        },
        //获得各种数据
        getData: function() {
            CSG.common.tool.ajax.post(url, data, success, error);
        }
    }
}();
