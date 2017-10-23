/**
 * Created by wangchaochao on 2016/11/19.
 */
;
! function() {
    CSG.port.csg_home = {
        say: function () {
            console.log("hi，主页面")

        },
        init: function () {
            this.bindEvent();
            //this.echartszhexian();
            this.echartszhuzhuang();
            this.echartsshanxing();
            this.echartssex();
            this.echartstime();
        },
        //绑定事件处理
        bindEvent: function () {//
            this.bind_Click_Event();
            $("#navul li:eq(0)").addClass("current");
        },
        //绑定各种事件处理
        bind_Click_Event: function () {
            _this = this;
            $(document).on('click', '', function () {

            })
        },
        //获得各种数据
        getData: function () {
            CSG.common.tool.ajax.post(url, data, success, error);
        },
        //行业分布
        echartsshanxing: function () {

            //数据
            var num = null;
            (function (d) {
                if (!window.localStorage.dataInformation) {
                    num = 10235085;
                } else if (window.localStorage.dataInformation) {
                    d = JSON.parse(window.localStorage.dataInformation);

                    var n = d.num;
                    var ned = parseInt(((new Date()).getTime() - d.date) / 1000) * 68
                    n += ned;
                    num = n;
                }
            }());
            var dom = document.getElementById("satisfied");
            var myChart = echarts.init(dom);
            var app = {};
            option = null;
            app.title = '环形图';
            option = {
                title: {
                    text: '行业分布',
                    x: '4%',
                    y: '4%',
                    textStyle: {
                        color: '#ffffff',
                        fontSize:16,
                        fontWeight:"normal"
                    }
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    x: '4%',
                    y:"16%",
                    data: ['汽车', '房地产', '快销', '金融', '其他'],
                    textStyle:{
                        color:"#8b8c90"
                    },
                    itemWidth:10,
                    itemHeight:10
                    //backgroundColor:["red","blue","green","white","black"]
                },

                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        center: ['50%', '50%'],
                        radius:["60%","21%"],
                        avoidLabelOverlap: false,
                        clockwise:false,
                        startAngle:250,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data: [
                            {value: num * 0.565, name: '汽车',itemStyle:{normal:{color:"#3a8d84"}}},
                            {value: num * 0.171, name: '房地产',itemStyle:{normal:{color:"#e67330"}}},
                            {value: num * 0.112, name: '快销',itemStyle:{normal:{color:"#e69230"}}},
                            {value: num * 0.101, name: '金融',itemStyle:{normal:{color:"#e1c33d"}}},
                            {value: num * 0.051, name: '其他',itemStyle:{normal:{color:"#4eb3d4"}}}
                        ]
                    }
                ]
            };
            if (option && typeof option === "object") {
                myChart.setOption(option, true);
            }
        },
        //性别分布
        echartssex: function () {
            var dom = document.getElementById("centsex");
            var myChart = echarts.init(dom);
            var app = {};
            option = null;
            app.title = '环形图';

            option = {
                title: {
                    text: '性别分布',
                    x: '42%',
                    y: '78%',
                    textStyle: {
                        color: '#fff',
                        fontSize:14
                    }
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                legend: {
                    orient: 'horizontal',
                    x: '38%',
                    y: "65%",
                    itemGap:26,
                    data: ['男', '女'],
                    textStyle:{
                        color:"#8b8c90"
                    },
                    itemWidth:10,
                    itemHeight:10
                },

                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: ['27%', '50%'],
                        avoidLabelOverlap: false,
                        center: ['50%', '35%'],
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data: [
                            {value: 270, name: '男',itemStyle:{normal:{color:"#3084e6"}}},
                            {value: 90, name: '女',itemStyle:{normal:{color:"#e67330"}}}
                        ]
                    }
                ]
            };
            if (option && typeof option === "object") {
                myChart.setOption(option, true);
            }
        },
        //年龄分布
        echartszhuzhuang: function () {
            var dom = document.getElementById("stack");
            var myChart = echarts.init(dom);
            var app = {};
            option = null;
            app.title = '环形图';
            option = {
                title: {
                    text: '年龄分布',
                    x: '36%',
                    y: '78%',
                    textStyle: {
                        color: '#fff',
                        fontSize:14
                    }
                },
                color: ['#4eb3d4'],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                grid: {
                    left: '-10%',
                    right: '16%',
                    top:"10%",
                    containLabel: true,
                    bottom:"25%"
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['18-25', '26-32', '33-38', '39-45', '46以上'],
                        axisTick: {
                            alignWithLabel: true
                        },
                        axisLine:{
                            lineStyle:{
                                color:["#5c647a"]
                            }
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        axisLine:{
                            show:false
                        },
                        axisTick:{
                            show:false
                        },
                        axisLabel:{
                            show:false
                        },
                        splitLine:{
                            show:false,
                            lineStyle:{
                                color:["#414856"]
                            }
                        },
                        splitArea:{
                            //show:true
                        }
                    }
                ],
                itemStyle:{
                    normal:{
                        color:['#4eb3d4']
                    }
                },
                lineStyle:{
                    normal:{
                        color:['#4eb3d4']
                    }
                },
                areaStyle:{
                    normal:{
                        color:['#4eb3d4']
                    }
                },
                series: [
                    {
                        name: '直接访问',
                        type: 'bar',
                        barWidth: '60%',
                        data: [10, 52, 200, 334, 20]
                    }
                ]
            };
            if (option && typeof option === "object") {
                myChart.setOption(option, true);
            }
        },
        //数据概览，折线图
        echartstime: function () {
            var dom = document.getElementById("jxy_home_trendechs");
            var myChart = echarts.init(dom);
            var app = {};
            option = null;
            option = {
                title: {
                    text: '一周走势数据',
                    x: '5%',
                    y: '10%',
                    textStyle: {
                        color: '#ffffff',
                        fontSize:14,
                        fontWeight:"normal"
                    }
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    //data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
                    //data: ['搜索引擎']

                },
                toolbox: {
                    show:false,
                    feature: {
                        saveAsImage: {}
                    }
                },
                grid: {
                    left: '-3%',
                    right: '4%',
                    bottom: '4%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: false,
                        axisLine:{
                            lineStyle:{
                                color:["#5c647a"]
                            }
                        },
                        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        axisLine:{
                          show:false
                        },
                        axisLabel:{
                            show:false
                        },
                        splitLine:{
                          //  show:false
                            lineStyle:{
                                color:["#414856"]
                            }
                        },
                        splitArea:{
                            //show:true
                        }
                    }
                ],
                itemStyle:{
                    normal:{
                        color:['#32d0aa']
                    }
                },
                lineStyle:{
                    normal:{
                        color:['#25776a']
                    }
                },
                areaStyle:{
                    normal:{
                        color:['#25776a']
                    }
                },
                series: [
                    //{
                    //    name: '邮件营销',
                    //    type: 'line',
                    //    stack: '总量',
                    //    areaStyle: {normal: {}},
                    //    data: [120, 132, 101, 134, 90, 230, 210]
                    //},
                    //{
                    //    name: '联盟广告',
                    //    type: 'line',
                    //    stack: '总量',
                    //    areaStyle: {normal: {}},
                    //    data: [220, 182, 191, 234, 290, 330, 310]
                    //},
                    //{
                    //    name: '视频广告',
                    //    type: 'line',
                    //    stack: '总量',
                    //    areaStyle: {normal: {}},
                    //    data: [150, 232, 201, 154, 190, 330, 410]
                    //},
                    //{
                    //    name: '直接访问',
                    //    type: 'line',
                    //    stack: '总量',
                    //    areaStyle: {normal: {}},
                    //    data: [320, 332, 301, 334, 390, 330, 320]
                    //},
                    {
                        name: '搜索引擎',
                        type: 'line',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                                position: 'left',
                                textStyle:{
                                    color:"#25776a"
                                }
                            }
                        },
                        areaStyle: {normal: {}},
                        data: [820, 932, 901, 934, 1290, 1330, 1320]
                    }
                ]
            };
            if (option && typeof option === "object") {
                myChart.setOption(option, true);
            }
        }
    }
}();
