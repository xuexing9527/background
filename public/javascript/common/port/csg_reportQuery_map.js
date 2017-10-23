/**
 * Created by Administrator on 2017/1/6 0006.
 */
$(document).ready(function() {
    var dom = document.getElementById("query-map");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    function randomData() {
        return Math.round(Math.random()*1000);
    }

    option = {
        title: {
            text: '2016年1-6月国内新能源汽车起火事件区域',
            //subtext: '纯属虚构',
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            //data:['被引燃','iphone4','iphone5']
        },
        lable:{
            normal:{
                textStyle:{
                    fontsize:'1rem'
                }
            }
        },
        visualMap: {
            min: 0,
            max: 2500,
            left: 'left',
            top: 'bottom',
            text: ['高','低'],           // 文本，默认为数值文本
            calculable: true
        },
        toolbox: {
            show: false,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {
                dataView: {readOnly: false},
                restore: {},
                saveAsImage: {}
            }
        },
        series: [
            {
                name: ' 自燃',
                type: 'map',
                mapType: 'china',
                roam: false,
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: true
                    }
                },
                data:[
                    {name: '北京',value: randomData() },
                    //{name: '天津',value: randomData() },
                    {name: '上海',value: randomData() },
                    {name: '余干县',value: randomData() },
                    //{name: '重庆',value: randomData() },
                    //{name: '河北',value: randomData() },
                    //{name: '河南',value: randomData() },
                    //{name: '云南',value: randomData() },
                    //{name: '辽宁',value: randomData() },
                    //{name: '黑龙江',value: randomData() },
                    //{name: '湖南',value: randomData() },
                    //{name: '安徽',value: randomData() },
                    //{name: '山东',value: randomData() },
                    //{name: '新疆',value: randomData() },
                    //{name: '江苏',value: randomData() },
                    //{name: '浙江',value: randomData() },
                    //{name: '江西',value: randomData() },
                    //{name: '湖北',value: randomData() },
                    //{name: '广西',value: randomData() },
                    //{name: '甘肃',value: randomData() },
                    //{name: '山西',value: randomData() },
                    //{name: '内蒙古',value: randomData() },
                    //{name: '陕西',value: randomData() },
                    //{name: '吉林',value: randomData() },
                    //{name: '福建',value: randomData() },
                    //{name: '贵州',value: randomData() },
                    //{name: '广东',value: randomData() },
                    //{name: '青海',value: randomData() },
                    //{name: '西藏',value: randomData() },
                    //{name: '四川',value: randomData() },
                    //{name: '宁夏',value: randomData() },
                    //{name: '海南',value: randomData() },
                    //{name: '台湾',value: randomData() },
                    //{name: '香港',value: randomData() },
                    {name: ' 珠海',value: randomData() }
                ]
            },
            {
                name: '空调系统故障',
                type: 'map',
                mapType: 'china',
                label: {
                    normal: {
                        show: true
                    },
                    emphasis: {
                        show: true
                    }
                },
                data:[
                    {name: '北京',value: randomData() },
                    //{name: '天津',value: randomData() },
                    {name: '上海',value: randomData() },
                    {name: '余干县',value: randomData() },
                    //{name: '重庆',value: randomData() },
                    //{name: '河北',value: randomData() },
                    //{name: '安徽',value: randomData() },
                    //{name: '新疆',value: randomData() },
                    //{name: '浙江',value: randomData() },
                    //{name: '江西',value: randomData() },
                    //{name: '山西',value: randomData() },
                    //{name: '内蒙古',value: randomData() },
                    //{name: '吉林',value: randomData() },
                    //{name: '福建',value: randomData() },
                    //{name: '广东',value: randomData() },
                    //{name: '西藏',value: randomData() },
                    //{name: '四川',value: randomData() },
                    //{name: '宁夏',value: randomData() },
                    //{name: '香港',value: randomData() },
                    {name: '珠海',value: randomData() }
                ]
            },
            {
                name: '	拖线板过热导致内饰燃烧',
                type: 'map',
                mapType: 'china',
                label: {
                    normal: {
                        show: true
                    },
                    emphasis: {
                        show: true
                    }
                },
                data:[
                    {name: '北京',value: randomData() },
                    //{name: '天津',value: randomData() },
                    {name: '上海',value: randomData() },
                    {name: '余干县',value: randomData() },


                    //{name: '广东',value: randomData() },
                    //{name: '台湾',value: randomData() },
                    //{name: '香港',value: randomData() },
                    {name: '珠海',value: randomData() }
                ]
            }
        ]
    };;
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
});