/**
 * Created by Administrator on 2017/1/6 0006.
 */
/*part1-01***/
$(document).ready(function() {
    var dom = document.getElementById("query-bar");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    option = {
        title : {
            text: ' 新能源汽车生产及销售情况'

            //subtext: '纯属虚构'
        },
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            bottom: 'bottom',
            data:['2016年上半年','2015年上半年']
        },
        toolbox: {
            show : false,
            feature : {
                dataView : {show: true, readOnly: false},
                magicType : {show: true, type: ['line', 'bar']},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                data : ['生产','销售']
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'2016年上半年',
                type:'bar',
                data:[21.5, 20.7],
                markPoint : {
                    data : [
                        {type : 'max', name: '最大值'},
                        {type : 'min', name: '最小值'}
                    ]
                },
                //markLine : {
                //    data : [
                //        {type : 'average', name: '平均值'}
                //    ]
                //}
            },
            {
                name:'2015年上半年',
                type:'bar',
                data:[9.78, 9.29],
                markPoint : {
                    data : [
                        {name : '年最高', value : 182.2, xAxis: 7, yAxis: 183},
                        {name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
                    ]
                },
                //markLine : {
                //    data : [
                //        {type : 'average', name : '平均值'}
                //    ]
                //}
            }
        ]
    };

    if (option && typeof option === "object") {
        myChart.setOption(option, true);

    }

});
/*part1-02*****/
$(document).ready(function() {
    var dom = document.getElementById("query-pie");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;


    option = {
        title : {
            text: '新能源汽车安全事故情况',
            x: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['2015年前','2015','2016']
        },

        series : [
            {
                name: '访问来源',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],

                data:[
                    {value:6, name:'2015年前'},
                    {value:17, name:'2015'},
                    {value:8, name:'2016'},
//              {value:234, name:'联盟广告'},
//              {value:135, name:'视频广告'},
//              {value:1548, name:'搜索引擎'}
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
        myChart.setOption(option, true);

    }
});

/******part1-03**/
$(document).ready(function() {
    var dom = document.getElementById("query-piethree");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    option = {
        backgroundColor: '#2c343c',
       //背景色


        title: {
            text: ' 电动汽车安全事故的诱因',
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
            min: 5,
            max: 30,
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
                    {value:13, name:'泡水'},
                    {value:16, name:'充电'},
                    {value:16, name:'其他零部件'},
                    {value:17, name:'碰撞'},
                    {value:23, name:'自燃'},
                    {value:14, name:'不明原因'}
                ].sort(function (a, b) { return a.value - b.value}),
                roseType: 'angle',
                label: {
                    normal: {
                        textStyle: {
                            color: 'rgba(255, 255, 255, 0.3)'
                            //字体颜色

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
                        //color: '#c23531',
                        color:'red',
                        shadowBlur: 200,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                        //shadowColor: 'red'
                    }
                }
            }
        ]
    };
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }

});



/**part02-01***/
$(document).ready(function() {
    var doms = document.getElementById("query-pies");
    var myCharts = echarts.init(doms);
    var app = {};
    option = null;


    option = {
        title : {
            text: '新能源汽车生产及销售情况',
            x: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['五菱宏光S','宝骏730','北汽幻速H3','欧诺','欧尚','别克GL8','菱智','风光330','风光370','奥德赛']
        },

        series : [
            {
                name: '访问来源',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],

                data:[
                    {value:254298, name:'五菱宏光S'},
                    {value:320041, name:'宝骏730'},
                    {value:94301, name:'北汽幻速H3'},
                    {value:142603, name:'欧诺'},
                    {value:108129, name:'欧尚'},
                    {value:70546, name:'别克GL8'},
                    {value:87110, name:'菱智'},
                    {value:88923, name:'风光330'},
                    {value:62083, name:'风光370'},
                    {value:34584, name:'奥德赛'}

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
    app.title = '五菱宏光车主年龄分布';

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
                data : ['18-20岁	', '21-25岁	', '26-30岁	', '30岁以上'],
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
                data:[14, 38, 24, 9]
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
            text: '五菱宏光车主驾龄分布',
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
            min: 5,
            max: 30,
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
                    {value:19, name:'0-1年'},
                    {value:17, name:'1-5年'},
                    {value:20, name:'5年以上'}

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
            text: '五菱宏光车主买车用途'
        },
        tooltip: {},
        legend: {
            bottom:'bottom',
            data: ['用途', '人数']
        },
        radar: {
            padding:'20px',
             //shape: 'circle',
            indicator: [
                { name: '电工', max: 2},
                { name: '代步', max: 5},
                { name: '记者', max: 1},
                { name: '拉货', max: 9},
                { name: '装机', max: 2},
                { name: '装修', max: 5},
                { name: '通讯', max: 1},
                { name: '快递', max: 1},
                { name: '拉客', max: 4},
                { name: '自营', max: 27}
            ]
        },
        series: [{
            name: '用途 vs 人数）',
            type: 'radar',
            // areaStyle: {normal: {}},
            data : [
                {
                    value : ['电工', '代步', '记者', '拉货', '装机', '装修', '通讯', '快递', '拉客', '自营'],
                    name : '用途'
                },
                {
                    value : [2, 5, 1, 9,2, 5,1,1,4,27],
                    name : '人数'
                }
            ]
        }]
    };
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
});