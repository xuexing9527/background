;
! function() {
    CSG.port.csg_reportCreate = {
        init: function() {
            this.bindEvent();
            this.ueditorinit();
            this.bind_echart_tutu();
        },
        ueditorinit:function(){
            //实例化编辑器
            //建议使用工厂方法getEditor创建和引用编辑器实例，如果在某个闭包下引用该编辑器，直接调用UE.getEditor('editor')就能拿到相关的实例
            var ue = UE.getEditor('editor');
            $(document).on('click', '#add_word', function(){
                var stringstr="<p style='font-size: 40px'>M</p>";
                var setcontent=ue.setContent(stringstr);
                //console.log(setcontent); 只能是执行没法打印出结果，结果undefined；
            });
        },
        //绑定事件处理
        bindEvent: function() {//
            this.bind_Click_Event();
            $("#navul li:eq(3)").addClass("current");
            $(".leftul li:eq(1)").addClass("current_left");//左侧导航部分
        },
        //绑定各种事件处理
        bind_Click_Event: function(){
            _this=this;
            $(document).on('click', '#create_preview', function(){
                layer.msg('该功能正在开发中，敬请期待', {
                    icon: 6,
                    time: 2000 //1秒关闭（如果不配置，默认是3秒）
                }, function(){

                });
            });
            $(document).on('click', '#add_report', function(){
                layer.open({
                    type: 1,
                    closeBtn :2,
                    btn:["确定","取消"],
                    btnAlign: 'c',
                    area: [ '910px','630px'],
                    title: ["数量详情", 'color:#7d909e;font-size:16px;font-weight:bold;background:rgba(0,0,0,0);font-family: "Microsoft Yahei";'],
                    content:$("#create_add_task"),
                    shade: [0.2],
                    success:function(){

                    },
                    end:function(){

                    },
                    yes: function(index, layero){
                        //alert(1);
                        layer.close(index);
                    },
                    btn2: function(index, layero){
                        //alert(2);
                    }
                });
            });
            $(document).on('click', '#create_report', function(){
                layer.open({
                    type: 1,
                    closeBtn :2,
                    area: [ '910px','630px'],
                    title: ["详情",'color:#c5ccd2;ont-weight: bold;font-size:20px;background:rgba(0,0,0,0);font-family: "Microsoft Yahei";'],
                    content:$(".query_checkBomb"),
                    shade: [0.2],
                    success:function(){

                    }
                });
            });
        },
        bind_echart_tutu:function(){
            /**part02-01***/
            $(document).ready(function() {
                var doms = document.getElementById("query-pies");
                var myCharts = echarts.init(doms);
                var app = {};
                option = null;
                option = {
                    title : {
                        text: '饼图程序调用高亮示例',
                        x: 'center'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        data: ['直接访问','邮件营销']
                    },

                    series : [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius : '55%',
                            center: ['50%', '60%'],

                            data:[
                                {value:335, name:'直接访问'},
                                {value:310, name:'邮件营销'}

                            ],
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                };
                if (option && typeof option === "object") {
                    myCharts.setOption(option, true);
                }
            });
            /***part02-02*****/
            $(document).ready(function() {
                var dom = document.getElementById("query-bars");
                var myChart = echarts.init(dom);
                var app = {};
                option = null;
                app.title = '坐标轴刻度与标签对齐';
                option = {
                    color: ['#3398DB'],
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis : [
                        {
                            type : 'category',
                            data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                            axisTick: {
                                alignWithLabel: true
                            }
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value'
                        }
                    ],
                    series : [
                        {
                            name:'直接访问',
                            type:'bar',
                            barWidth: '60%',
                            data:[10, 52, 200, 334, 390, 330, 220]
                        }
                    ]
                };

                if (option && typeof option === "object") {
                    myChart.setOption(option, true);
                }
            });

            //****part02-03****//
            $(document).ready(function() {
                var dom = document.getElementById("query-pie3");
                var myChart = echarts.init(dom);
                var app = {};
                option = null;
                option = {
                    backgroundColor: '#2c343c',

                    title: {
                        text: 'Customized Pie',
                        left: 'center',
                        top: 20,
                        textStyle: {
                            color: '#ccc'
                        }
                    },

                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },

                    visualMap: {
                        show: false,
                        min: 80,
                        max: 600,
                        inRange: {
                            colorLightness: [0, 1]
                        }
                    },
                    series : [
                        {
                            name:'访问来源',
                            type:'pie',
                            radius : '55%',
                            center: ['50%', '50%'],
                            data:[
                                {value:335, name:'直接访问'},
                                {value:310, name:'邮件营销'},
                                {value:274, name:'联盟广告'},
                                {value:235, name:'视频广告'},
                                {value:400, name:'搜索引擎'}
                            ].sort(function (a, b) { return a.value - b.value}),
                            roseType: 'angle',
                            label: {
                                normal: {
                                    textStyle: {
                                        color: 'rgba(255, 255, 255, 0.3)'
                                    }
                                }
                            },
                            labelLine: {
                                normal: {
                                    lineStyle: {
                                        color: 'rgba(255, 255, 255, 0.3)'
                                    },
                                    smooth: 0.2,
                                    length: 10,
                                    length2: 20
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: '#c23531',
                                    shadowBlur: 200,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                };
                if (option && typeof option === "object") {
                    myChart.setOption(option, true);
                }
            });
            /****part02-04******/
            $(document).ready(function() {
                var dom = document.getElementById("query-radar");
                var myChart = echarts.init(dom);
                var app = {};
                option = null;
                option = {
                    title: {
                        text: '基础雷达图'
                    },
                    tooltip: {},
                    legend: {
                        bottom:'bottom',
                        data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
                    },
                    radar: {
                        padding:'20px',
                        //shape: 'circle',
                        indicator: [
                            { name: '销售（sales）', max: 6500},
                            { name: '管理（Administration）', max: 16000},
                            { name: '信息技术（Information Techology）', max: 30000},
                            { name: '客服（Customer Support）', max: 38000},
                            { name: '研发（Development）', max: 52000},
                            { name: '市场（Marketing）', max: 25000}
                        ]
                    },
                    series: [{
                        name: '预算 vs 开销（Budget vs spending）',
                        type: 'radar',
                        // areaStyle: {normal: {}},
                        data : [
                            {
                                value : [4300, 10000, 28000, 35000, 50000, 19000],
                                name : '预算分配（Allocated Budget）'
                            },
                            {
                                value : [5000, 14000, 28000, 31000, 42000, 21000],
                                name : '实际开销（Actual Spending）'
                            }
                        ]
                    }]
                };;
                if (option && typeof option === "object") {
                    myChart.setOption(option, true);
                }
            });
        }
    }
}();


