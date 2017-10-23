;
! function() {
    //查询条件初始化；跟分页牢牢结合在一起
    var $keyword="",$theme="",$starttime="",$endtime="",startTimeStamp=0,endTimeStamp=0;
    CSG.port.csg_dataAnalysis = {
        say: function () {
            console.log("hi")
        },
        //总的事件调用
        init: function () {
            this.bindEvent();
        },
        //绑定事件处理
        bindEvent: function () {
            this.bind_Click_Event();//绑定所有的点击事件
            this.bind_LayUi_Event();//layui事件处理，仅仅用来处理日期
            $("#navul li:eq(1)").addClass("current");//header导航部分
            $(".leftul li:eq(0)").addClass("current_left");//左侧导航部分
            //查询按钮查询任务，默认为空也能查询全部的内容
            _this.getTableData("", "", 0, 0, 0, 10,function (res) {
                _this.bind_Draw_Table_list(res);
            });
        },
        //绑定各种事件处理
        bind_Click_Event: function () {
            _this = this;
            //点击查询的出现任务文件列表
            $(document).on('click', '#An_search', function () {
                //查询前赋值
                $keyword = $("#An_keywords").val(),$starttime = $("#LAY_demorange_s").val(), $endtime = $("#LAY_demorange_e").val();
                $theme = $theme=="" ? "" : $("#An_theme").val();
                startTimeStamp = startTimeStamp == 0 ? 0 : Date.parse(new Date($starttime))/1000;
                endTimeStamp = endTimeStamp == 0 ? 0 : Date.parse(new Date($endtime))/1000;
                CSG.port.csg_dataAnalysis.getTableData($keyword, $theme, startTimeStamp, endTimeStamp, 0, 10, function (res) {
                    CSG.port.csg_dataAnalysis.bind_Draw_Table_list(res);
                });
                if($keyword=="宝马"){

                    $(".query_content_content_header p:eq(1)").css("display","block");
                    //查询按钮查询任务，默认为空也能查询全部的内容
                    _this.getTableData("", "", 0, 0, 0, 10,function (res) {
                        _this.bind_Draw_Table_list(res);
                    });
                    $(".query_content_content_box_part01").hide();
                    $(".query_content_content_box_part02").show();
                    $(".query_content_content_header p:eq(1)").addClass("h2PPP").siblings().removeClass("h2PPP");

                    $(".jxy_query_content_spanbox_ones span:eq(0)").html("宝马i5采用悬浮车顶设计 有望2020年推出");
                    $(".jxy_query_content_spanbox_ones span:eq(1)").html("宝马换代X3长轴版将国产 搭新2.0T发动机");
                    $(".jxy_query_content_spanbox_ones span:eq(2)").html("宝马1系三厢版将于2月27日上市 或5款车型");
                    $(".jxy_query_content_spanbox_ones span:eq(3)").html("全新宝马1系三厢配置曝光 或2月27日上市");

                    $("#jxy_table_forum tr:eq(0) td:eq(0) span:eq(0)").html("易车网:");
                    $("#jxy_table_forum tr:eq(0) td:eq(0) span:eq(1)").html("47395");
                    $("#jxy_table_forum tr:eq(0) td:eq(1) span:eq(0)").html("汽车之家:");
                    $("#jxy_table_forum tr:eq(0) td:eq(1) span:eq(1)").html("447422");
                    $("#jxy_table_forum tr:eq(0) td:eq(2) span:eq(0)").html("新浪网:");
                    $("#jxy_table_forum tr:eq(0) td:eq(2) span:eq(1)").html("59522");

                    $("#jxy_table_forum tr:eq(1) td:eq(0) span:eq(0)").html("搜狐网:");
                    $("#jxy_table_forum tr:eq(1) td:eq(0) span:eq(1)").html("13840");
                    $("#jxy_table_forum tr:eq(1) td:eq(1) span:eq(0)").html("腾讯网:");
                    $("#jxy_table_forum tr:eq(1) td:eq(1) span:eq(1)").html("68374");
                    $("#jxy_table_forum tr:eq(1) td:eq(2) span:eq(0)").html("天涯汽车:");
                    $("#jxy_table_forum tr:eq(1) td:eq(2) span:eq(1)").html("4818");

                    $("#jxy_table_forum tr:eq(2) td:eq(0) span:eq(0)").html("爱卡汽车:");
                    $("#jxy_table_forum tr:eq(2) td:eq(0) span:eq(1)").html("41953");
                    $("#jxy_table_forum tr:eq(2) td:eq(1) span:eq(0)").html("网上车市:");
                    $("#jxy_table_forum tr:eq(2) td:eq(1) span:eq(1)").html("4538");
                    $("#jxy_table_forum tr:eq(2) td:eq(2) span:eq(0)").html("凤凰汽车:");
                    $("#jxy_table_forum tr:eq(2) td:eq(2) span:eq(1)").html("9845");

                    //字符云

                    $(".jxy_query_content_spanbox_threes img").attr("src","http://localhost:9298/images/static/csg-dataAnalysis/bm123.png");

                    var dataage=[['18以下', '19-24', '25-30', '31-36', '37-43', '43以上'],[10, 1200, 4000, 3340, 3900, 3300]];
                    _this.bind_echarts_age_Event(dataage);

                    function randomData() {
                        return Math.round(Math.random()*1000);
                    }
                    var mapdata={
                        sename:"宝马",
                        mapname:["宝马"],
                        mapdata: [
                            {name: '北京',value: randomData() },
                            {name: '天津',value: randomData() },
                            {name: '上海',value: randomData() },
                            {name: '重庆',value: randomData() },
                            {name: '河北',value: randomData() },
                            {name: '河南',value: randomData() },
                            {name: '云南',value: randomData() },
                            {name: '辽宁',value: randomData() },
                            {name: '黑龙江',value: randomData() },
                            {name: '湖南',value: randomData() },
                            {name: '安徽',value: randomData() },
                            {name: '山东',value: randomData() },
                            {name: '新疆',value: randomData() },
                            {name: '江苏',value: randomData() },
                            {name: '浙江',value: randomData() },
                            {name: '江西',value: randomData() },
                            {name: '湖北',value: randomData() },
                            {name: '广西',value: randomData() },
                            {name: '甘肃',value: randomData() },
                            {name: '山西',value: randomData() },
                            {name: '内蒙古',value: randomData() },
                            {name: '陕西',value: randomData() },
                            {name: '吉林',value: randomData() },
                            {name: '福建',value: randomData() },
                            {name: '贵州',value: randomData() },
                            {name: '广东',value: randomData() },
                            {name: '青海',value: randomData() },
                            {name: '西藏',value: randomData() },
                            {name: '四川',value: randomData() },
                            {name: '宁夏',value: randomData() },
                            {name: '海南',value: randomData() },
                            {name: '台湾',value: randomData() },
                            {name: '香港',value: randomData() },
                            {name: '澳门',value: randomData() }
                        ]
                    };
                    _this.bind_echarts_area_Event(mapdata);
                    var carstyledata={
                        dataname: ['运动型两厢轿车', '四门轿跑车', '电动性能', '双门轿跑车', 'GT',"敞篷跑车","BMW i","全能轿跑车","SAV","旅行车"],
                        datadata: [
                            {value: 3350, name: '运动型两厢轿车'},
                            {value: 3100, name: '四门轿跑车'},
                            {value: 2340, name: '电动性能'},
                            {value: 1350, name: '双门轿跑车'},
                            {value: 1000, name: 'GT'},
                            {value: 7000, name: '敞篷跑车'},
                            {value: 5280, name: 'BMW i'},
                            {value: 4680, name: '全能轿跑车'},
                            {value: 3410, name: 'SAV'},
                            {value: 2000, name: '旅行车'}
                        ]
                    };
                    _this.bind_echarts_carstyle_Event(carstyledata);
                    $("#jxy_carstyle_ul li:eq(0) img:eq(0)").attr("src","http://localhost:9298/images/static/csg-dataAnalysis/bmw01.png");
                    $("#jxy_carstyle_ul li:eq(0) span:eq(0)").html("1系运动型两厢轿车");

                    $("#jxy_carstyle_ul li:eq(1) img:eq(0)").attr("src","http://localhost:9298/images/static/csg-dataAnalysis/bmw02.png");
                    $("#jxy_carstyle_ul li:eq(1) span:eq(0)").html("4系四门轿跑车");

                    $("#jxy_carstyle_ul li:eq(2) img:eq(0)").attr("src","http://localhost:9298/images/static/csg-dataAnalysis/bmw03.png");
                    $("#jxy_carstyle_ul li:eq(2) span:eq(0)").html("6系敞篷轿跑车");

                    $("#jxy_carstyle_ul li:eq(3) img:eq(0)").attr("src","http://localhost:9298/images/static/csg-dataAnalysis/bmw04.png");
                    $("#jxy_carstyle_ul li:eq(3) span:eq(0)").html("BMW M3");

                    $("#jxy_carstyle_ul li:eq(4) img:eq(0)").attr("src","http://localhost:9298/images/static/csg-dataAnalysis/bmw05.png");
                    $("#jxy_carstyle_ul li:eq(4) span:eq(0)").html("BMW i8");

                    $("#jxy_carstyle_ul li:eq(5) img:eq(0)").attr("src","http://localhost:9298/images/static/csg-dataAnalysis/bmw06.png");
                    $("#jxy_carstyle_ul li:eq(5) span:eq(0)").html("X1插电式混合动力");


                };
                if($keyword=="AMG"){

                    $(".query_content_content_header p:eq(1)").css("display","block");
                    //查询按钮查询任务，默认为空也能查询全部的内容
                    _this.getTableData("", "", 0, 0, 0, 10,function (res) {
                        _this.bind_Draw_Table_list(res);
                    });

                    $(".query_content_content_box_part01").hide();
                    $(".query_content_content_box_part02").show();
                    $(".query_content_content_header p:eq(1)").addClass("h2PPP").siblings().removeClass("h2PPP");

                    $(".jxy_query_content_spanbox_ones span:eq(0)").html("AMG GT S限量特别版上市 售价196.8万元");
                    $(".jxy_query_content_spanbox_ones span:eq(1)").html("2017款加版奔驰GLS450 AMG专属豪华低价");
                    $(".jxy_query_content_spanbox_ones span:eq(2)").html("视频：终极豪华悍将 2018款奔驰S65-AMG");
                    $(".jxy_query_content_spanbox_ones span:eq(3)").html("17款加版奔驰GLS63时尚前卫优惠5万元");
                    $("#jxy_table_forum tr:eq(0) td:eq(0) span:eq(0)").html("易车网:");
                    $("#jxy_table_forum tr:eq(0) td:eq(0) span:eq(1)").html("12650");
                    $("#jxy_table_forum tr:eq(0) td:eq(1) span:eq(0)").html("汽车之家:");
                    $("#jxy_table_forum tr:eq(0) td:eq(1) span:eq(1)").html("186313");
                    $("#jxy_table_forum tr:eq(0) td:eq(2) span:eq(0)").html("新浪网:");
                    $("#jxy_table_forum tr:eq(0) td:eq(2) span:eq(1)").html("33216");

                    $("#jxy_table_forum tr:eq(1) td:eq(0) span:eq(0)").html("搜狐网:");
                    $("#jxy_table_forum tr:eq(1) td:eq(0) span:eq(1)").html("42430");
                    $("#jxy_table_forum tr:eq(1) td:eq(1) span:eq(0)").html("腾讯网:");
                    $("#jxy_table_forum tr:eq(1) td:eq(1) span:eq(1)").html("61201");
                    $("#jxy_table_forum tr:eq(1) td:eq(2) span:eq(0)").html("天涯汽车:");
                    $("#jxy_table_forum tr:eq(1) td:eq(2) span:eq(1)").html("27100");

                    $("#jxy_table_forum tr:eq(2) td:eq(0) span:eq(0)").html("爱卡汽车:");
                    $("#jxy_table_forum tr:eq(2) td:eq(0) span:eq(1)").html("14817");
                    $("#jxy_table_forum tr:eq(2) td:eq(1) span:eq(0)").html("网上车市:");
                    $("#jxy_table_forum tr:eq(2) td:eq(1) span:eq(1)").html("2936");
                    $("#jxy_table_forum tr:eq(2) td:eq(2) span:eq(0)").html("凤凰汽车:");
                    $("#jxy_table_forum tr:eq(2) td:eq(2) span:eq(1)").html("7302");

                    $(".jxy_query_content_spanbox_threes img").attr("src","http://localhost:9298/images/static/csg-dataAnalysis/AMG123.png");
                    var dataage=[['18以下', '19-24', '25-30', '31-36', '37-43', '43以上'],[100, 3220, 2155, 6347, 2941,3542]];
                    _this.bind_echarts_age_Event(dataage);
                    function randomData() {
                        return Math.round(Math.random()*1000);
                    }
                    var mapdata1={
                        sename:"AMG",
                        mapname:["AMG"],
                        mapdata: [
                            {name: '北京',value: randomData() },
                            {name: '天津',value: randomData() },
                            {name: '上海',value: randomData() },
                            {name: '重庆',value: randomData() },
                            {name: '河北',value: randomData() },
                            {name: '河南',value: randomData() },
                            {name: '云南',value: randomData() },
                            {name: '辽宁',value: randomData() },
                            {name: '黑龙江',value: randomData() },
                            {name: '湖南',value: randomData() },
                            {name: '安徽',value: randomData() },
                            {name: '山东',value: randomData() },
                            {name: '新疆',value: randomData() },
                            {name: '江苏',value: randomData() },
                            {name: '浙江',value: randomData() },
                            {name: '江西',value: randomData() },
                            {name: '湖北',value: randomData() },
                            {name: '广西',value: randomData() },
                            {name: '甘肃',value: randomData() },
                            {name: '山西',value: randomData() },
                            {name: '内蒙古',value: randomData() },
                            {name: '陕西',value: randomData() },
                            {name: '吉林',value: randomData() },
                            {name: '福建',value: randomData() },
                            {name: '贵州',value: randomData() },
                            {name: '广东',value: randomData() },
                            {name: '青海',value: randomData() },
                            {name: '西藏',value: randomData() },
                            {name: '四川',value: randomData() },
                            {name: '宁夏',value: randomData() },
                            {name: '海南',value: randomData() },
                            {name: '台湾',value: randomData() },
                            {name: '香港',value: randomData() },
                            {name: '澳门',value: randomData() }
                        ]
                    };
                    _this.bind_echarts_area_Event(mapdata1);
                    var carstyledata={
                        dataname: ['轿车', '跑车', '双门轿跑车', 'SUV'],
                        datadata: [
                            {value: 33350, name: '轿车'},
                            {value: 1310, name: '跑车'},
                            {value: 8487, name: '双门轿跑车'},
                            {value: 57123, name: 'SUV'}
                        ]
                    };
                    _this.bind_echarts_carstyle_Event(carstyledata);
                    $("#jxy_carstyle_ul li:eq(0) img:eq(0)").attr("src","http://localhost:9298/images/static/csg-dataAnalysis/amg01.png");
                    $("#jxy_carstyle_ul li:eq(0) span:eq(0)").html("梅赛德斯 A 45 4MATIC");

                    $("#jxy_carstyle_ul li:eq(1) img:eq(0)").attr("src","http://localhost:9298/images/static/csg-dataAnalysis/amg02.png");
                    $("#jxy_carstyle_ul li:eq(1) span:eq(0)").html("梅赛德斯 C 63 S 轿跑车");

                    $("#jxy_carstyle_ul li:eq(2) img:eq(0)").attr("src","http://localhost:9298/images/static/csg-dataAnalysis/amg03.png");
                    $("#jxy_carstyle_ul li:eq(2) span:eq(0)").html("梅赛德斯 G 63");

                    $("#jxy_carstyle_ul li:eq(3) img:eq(0)").attr("src","http://localhost:9298/images/static/csg-dataAnalysis/amg04.png");
                    $("#jxy_carstyle_ul li:eq(3) span:eq(0)").html("GLE 63 S 4MATIC");

                    $("#jxy_carstyle_ul li:eq(4) img:eq(0)").attr("src","http://localhost:9298/images/static/csg-dataAnalysis/amg05.png");
                    $("#jxy_carstyle_ul li:eq(4) span:eq(0)").html("梅赛德斯-AMG GT S");

                    $("#jxy_carstyle_ul li:eq(5) img:eq(0)").attr("src","http://localhost:9298/images/static/csg-dataAnalysis/amg06.png");
                    $("#jxy_carstyle_ul li:eq(5) span:eq(0)").html("梅赛德斯-AMG S 65 L");


                }


                //奔驰
                if($keyword=="奔驰"){

                    $(".query_content_content_header p:eq(1)").css("display","block");
                    //查询按钮查询任务，默认为空也能查询全部的内容
                    _this.getTableData("", "", 0, 0, 0, 10,function (res) {
                        _this.bind_Draw_Table_list(res);
                    });
                    $(".query_content_content_box_part01").hide();
                    $(".query_content_content_box_part02").show();
                    $(".query_content_content_header p:eq(1)").addClass("h2PPP").siblings().removeClass("h2PPP");

                    $(".jxy_query_content_spanbox_ones span:eq(0)").html("2017奔驰冰雪对决试驾体验 雪地越野");
                    $(".jxy_query_content_spanbox_ones span:eq(1)").html("奔驰新品牌亮剑宝马i系列 或巴黎车展推出");
                    $(".jxy_query_content_spanbox_ones span:eq(2)").html("蝴蝶”虽小五脏全 实拍第八代奔驰S级");
                    $(".jxy_query_content_spanbox_ones span:eq(3)").html("暗夜精灵 奔驰S级轿跑版特别版官图");
                    $("#jxy_table_forum tr:eq(0) td:eq(0) span:eq(0)").html("易车网:");
                    $("#jxy_table_forum tr:eq(0) td:eq(0) span:eq(1)").html("1265");
                    $("#jxy_table_forum tr:eq(0) td:eq(1) span:eq(0)").html("汽车之家:");
                    $("#jxy_table_forum tr:eq(0) td:eq(1) span:eq(1)").html("186313");
                    $("#jxy_table_forum tr:eq(0) td:eq(2) span:eq(0)").html("新浪网:");
                    $("#jxy_table_forum tr:eq(0) td:eq(2) span:eq(1)").html("33216");

                    $("#jxy_table_forum tr:eq(1) td:eq(0) span:eq(0)").html("搜狐网:");
                    $("#jxy_table_forum tr:eq(1) td:eq(0) span:eq(1)").html("4243");
                    $("#jxy_table_forum tr:eq(1) td:eq(1) span:eq(0)").html("腾讯网:");
                    $("#jxy_table_forum tr:eq(1) td:eq(1) span:eq(1)").html("61201");
                    $("#jxy_table_forum tr:eq(1) td:eq(2) span:eq(0)").html("天涯汽车:");
                    $("#jxy_table_forum tr:eq(1) td:eq(2) span:eq(1)").html("2710");

                    $("#jxy_table_forum tr:eq(2) td:eq(0) span:eq(0)").html("爱卡汽车:");
                    $("#jxy_table_forum tr:eq(2) td:eq(0) span:eq(1)").html("14817");
                    $("#jxy_table_forum tr:eq(2) td:eq(1) span:eq(0)").html("网上车市:");
                    $("#jxy_table_forum tr:eq(2) td:eq(1) span:eq(1)").html("2936");
                    $("#jxy_table_forum tr:eq(2) td:eq(2) span:eq(0)").html("凤凰汽车:");
                    $("#jxy_table_forum tr:eq(2) td:eq(2) span:eq(1)").html("7302");


                    $(".jxy_query_content_spanbox_threes img").attr("src","http://localhost:9298/images/static/csg-dataAnalysis/bc123.png");

                    var dataage=[['18以下', '19-24', '25-30', '31-36', '37-43', '43以上'],[8, 750, 5235, 6940, 8500, 3300]];
                    _this.bind_echarts_age_Event(dataage);
                    function randomData() {
                        return Math.round(Math.random()*1000);
                    }
                    var mapdata={
                        sename:"奔驰",
                        mapname:["奔驰"],
                        mapdata: [
                            {name: '北京',value: randomData() },
                            {name: '天津',value: randomData() },
                            {name: '上海',value: randomData() },
                            {name: '重庆',value: randomData() },
                            {name: '河北',value: randomData() },
                            {name: '河南',value: randomData() },
                            {name: '云南',value: randomData() },
                            {name: '辽宁',value: randomData() },
                            {name: '黑龙江',value: randomData() },
                            {name: '湖南',value: randomData() },
                            {name: '安徽',value: randomData() },
                            {name: '山东',value: randomData() },
                            {name: '新疆',value: randomData() },
                            {name: '江苏',value: randomData() },
                            {name: '浙江',value: randomData() },
                            {name: '江西',value: randomData() },
                            {name: '湖北',value: randomData() },
                            {name: '广西',value: randomData() },
                            {name: '甘肃',value: randomData() },
                            {name: '山西',value: randomData() },
                            {name: '内蒙古',value: randomData() },
                            {name: '陕西',value: randomData() },
                            {name: '吉林',value: randomData() },
                            {name: '福建',value: randomData() },
                            {name: '贵州',value: randomData() },
                            {name: '广东',value: randomData() },
                            {name: '青海',value: randomData() },
                            {name: '西藏',value: randomData() },
                            {name: '四川',value: randomData() },
                            {name: '宁夏',value: randomData() },
                            {name: '海南',value: randomData() },
                            {name: '台湾',value: randomData() },
                            {name: '香港',value: randomData() },
                            {name: '澳门',value: randomData() }
                        ]
                    };
                    _this.bind_echarts_area_Event(mapdata);
                    var carstyledata={
                        dataname: ['运动版', '猎装车', '旅行车', 'SUV', '轿跑车',"敞篷轿跑车","掀背车","轿车"],
                        datadata: [
                            {value: 3500, name: '运动版'},
                            {value: 3100, name: '猎装车'},
                            {value: 2340, name: '旅行车'},
                            {value: 1350, name: 'SUV'},
                            {value: 1000, name: '轿跑车'},
                            {value: 7000, name: '敞篷轿跑车'},
                            {value: 5280, name: '掀背车'},
                            {value: 4680, name: '轿车'},
                        ]
                    };
                    _this.bind_echarts_carstyle_Event(carstyledata);
                    $("#jxy_carstyle_ul li:eq(0) img:eq(0)").attr("src","http://localhost:9298/images/static/csg-dataAnalysis/B01.jpg");
                    $("#jxy_carstyle_ul li:eq(0) span:eq(0)").html("B型运动旅行车");

                    $("#jxy_carstyle_ul li:eq(1) img:eq(0)").attr("src","http://localhost:9298/images/static/csg-dataAnalysis/b02.jpg");
                    $("#jxy_carstyle_ul li:eq(1) span:eq(0)").html("GLE SUV");

                    $("#jxy_carstyle_ul li:eq(2) img:eq(0)").attr("src","http://localhost:9298/images/static/csg-dataAnalysis/b03.jpg");
                    $("#jxy_carstyle_ul li:eq(2) span:eq(0)").html("S级轿跑车");

                    $("#jxy_carstyle_ul li:eq(3) img:eq(0)").attr("src","http://localhost:9298/images/static/csg-dataAnalysis/b04.jpg");
                    $("#jxy_carstyle_ul li:eq(3) span:eq(0)").html("A级车");

                    $("#jxy_carstyle_ul li:eq(4) img:eq(0)").attr("src","http://localhost:9298/images/static/csg-dataAnalysis/b05.jpg");
                    $("#jxy_carstyle_ul li:eq(4) span:eq(0)").html("GLS SUV");

                    $("#jxy_carstyle_ul li:eq(5) img:eq(0)").attr("src","http://localhost:9298/images/static/csg-dataAnalysis/b06.jpg");
                    $("#jxy_carstyle_ul li:eq(5) span:eq(0)").html("新一代SLC敞篷跑车");


                }

                //宾利
                if($keyword=="宾利"){

                    $(".query_content_content_header p:eq(1)").css("display","block");
                    //查询按钮查询任务，默认为空也能查询全部的内容
                    _this.getTableData("", "", 0, 0, 0, 10,function (res) {
                        _this.bind_Draw_Table_list(res);
                    });
                    $(".query_content_content_box_part01").hide();
                    $(".query_content_content_box_part02").show();
                    $(".query_content_content_header p:eq(1)").addClass("h2PPP").siblings().removeClass("h2PPP");

                    $(".jxy_query_content_spanbox_ones span:eq(0)").html("预计600万元起 新款慕尚长轴距版亮相");
                    $(".jxy_query_content_spanbox_ones span:eq(1)").html("披着黑衣的绅士 宾利慕尚特别版官图");
                    $(".jxy_query_content_spanbox_ones span:eq(2)").html("全球最长寿 宾利劳斯莱斯L系列发动机");
                    $(".jxy_query_content_spanbox_ones span:eq(3)").html("极尽奢华之能事 海外试驾宾利新款慕尚");
                    $("#jxy_table_forum tr:eq(0) td:eq(0) span:eq(0)").html("易车网:");
                    $("#jxy_table_forum tr:eq(0) td:eq(0) span:eq(1)").html("12");
                    $("#jxy_table_forum tr:eq(0) td:eq(1) span:eq(0)").html("汽车之家:");
                    $("#jxy_table_forum tr:eq(0) td:eq(1) span:eq(1)").html("5101");
                    $("#jxy_table_forum tr:eq(0) td:eq(2) span:eq(0)").html("新浪网:");
                    $("#jxy_table_forum tr:eq(0) td:eq(2) span:eq(1)").html("16");

                    $("#jxy_table_forum tr:eq(1) td:eq(0) span:eq(0)").html("搜狐网:");
                    $("#jxy_table_forum tr:eq(1) td:eq(0) span:eq(1)").html("13");
                    $("#jxy_table_forum tr:eq(1) td:eq(1) span:eq(0)").html("腾讯网:");
                    $("#jxy_table_forum tr:eq(1) td:eq(1) span:eq(1)").html("14");
                    $("#jxy_table_forum tr:eq(1) td:eq(2) span:eq(0)").html("天涯汽车:");
                    $("#jxy_table_forum tr:eq(1) td:eq(2) span:eq(1)").html("10");

                    $("#jxy_table_forum tr:eq(2) td:eq(0) span:eq(0)").html("爱卡汽车:");
                    $("#jxy_table_forum tr:eq(2) td:eq(0) span:eq(1)").html("4543");
                    $("#jxy_table_forum tr:eq(2) td:eq(1) span:eq(0)").html("网上车市:");
                    $("#jxy_table_forum tr:eq(2) td:eq(1) span:eq(1)").html("36");
                    $("#jxy_table_forum tr:eq(2) td:eq(2) span:eq(0)").html("凤凰汽车:");
                    $("#jxy_table_forum tr:eq(2) td:eq(2) span:eq(1)").html("475");

                    $(".jxy_query_content_spanbox_threes img").attr("src","http://localhost:9298/images/static/csg-dataAnalysis/bl123.png");

                    var dataage=[['18以下', '19-24', '25-30', '31-36', '37-43', '43以上'],[30, 1800, 1560, 3509, 2085, 1360]];
                    _this.bind_echarts_age_Event(dataage);
                    function randomData() {
                        return Math.round(Math.random()*1000);
                    }
                    var mapdata={
                        sename:"宾利",
                        mapname:["宾利"],
                        mapdata: [
                            {name: '北京',value: randomData() },
                            {name: '天津',value: randomData() },
                            {name: '上海',value: randomData() },
                            {name: '重庆',value: randomData() },
                            {name: '河北',value: randomData() },
                            {name: '河南',value: randomData() },
                            {name: '云南',value: randomData() },
                            {name: '辽宁',value: randomData() },
                            {name: '黑龙江',value: randomData() },
                            {name: '湖南',value: randomData() },
                            {name: '安徽',value: randomData() },
                            {name: '山东',value: randomData() },
                            {name: '新疆',value: randomData() },
                            {name: '江苏',value: randomData() },
                            {name: '浙江',value: randomData() },
                            {name: '江西',value: randomData() },
                            {name: '湖北',value: randomData() },
                            {name: '广西',value: randomData() },
                            {name: '甘肃',value: randomData() },
                            {name: '山西',value: randomData() },
                            {name: '内蒙古',value: randomData() },
                            {name: '陕西',value: randomData() },
                            {name: '吉林',value: randomData() },
                            {name: '福建',value: randomData() },
                            {name: '贵州',value: randomData() },
                            {name: '广东',value: randomData() },
                            {name: '青海',value: randomData() },
                            {name: '西藏',value: randomData() },
                            {name: '四川',value: randomData() },
                            {name: '宁夏',value: randomData() },
                            {name: '海南',value: randomData() },
                            {name: '台湾',value: randomData() },
                            {name: '香港',value: randomData() },
                            {name: '澳门',value: randomData() }
                        ]
                    };
                    _this.bind_echarts_area_Event(mapdata);
                    var carstyledata={
                        dataname: ['慕尚', '飞驰', '欧陆', '添越'],
                        datadata: [
                            {value: 3500, name: '慕尚'},
                            {value: 3100, name: '飞驰'},
                            {value: 2340, name: '欧陆'},
                            {value: 1350, name: '添越'},

                        ]
                    };
                    _this.bind_echarts_carstyle_Event(carstyledata);
                    $("#jxy_carstyle_ul li:eq(0) img:eq(0)").attr("src","http://localhost:9298/images/static/csg-dataAnalysis/bl01.jpg");
                    $("#jxy_carstyle_ul li:eq(0) span:eq(0)").html("宾利V8 S");

                    $("#jxy_carstyle_ul li:eq(1) img:eq(0)").attr("src","http://localhost:9298/images/static/csg-dataAnalysis/bl02.jpg");
                    $("#jxy_carstyle_ul li:eq(1) span:eq(0)").html("宾利Mulsanne");

                    $("#jxy_carstyle_ul li:eq(2) img:eq(0)").attr("src","http://localhost:9298/images/static/csg-dataAnalysis/bl03.jpg");
                    $("#jxy_carstyle_ul li:eq(2) span:eq(0)").html("改款汉兰达");

                    $("#jxy_carstyle_ul li:eq(3) img:eq(0)").attr("src","http://localhost:9298/images/static/csg-dataAnalysis/bl04.jpg");
                    $("#jxy_carstyle_ul li:eq(3) span:eq(0)").html("宾利Continental GT");

                    $("#jxy_carstyle_ul li:eq(4) img:eq(0)").attr("src","http://localhost:9298/images/static/csg-dataAnalysis/bl05.jpg");
                    $("#jxy_carstyle_ul li:eq(4) span:eq(0)").html("宾利 慕尚 2014款");

                    $("#jxy_carstyle_ul li:eq(5) img:eq(0)").attr("src","http://localhost:9298/images/static/csg-dataAnalysis/bl06.jpg");
                    $("#jxy_carstyle_ul li:eq(5) span:eq(0)").html("宾利欧陆GTC");


                }
            });
            //点击查看出来的跳转详情处理
            $(document).on("click","#An_search_info",function(){
                var $thisobj = $(this);
                id = $thisobj.attr('oid');
                CSG.port.csg_dataAnalysis.getSeachInfoData(id,0,10,function(res){
                    window.open("/dataAnalysis/rendering/dataAnalysisRel"+res.id,"_self")
                });
            });
            var $array_storage={};//用来存储选择的每个单选框rel的数据，也就是当前每个文件的id；
            //单选按钮
            $(document).on("click",".An_tab_checkbox",function(){
                flags=1;
                var $thisobj = $(this);
                var rel = $thisobj.attr('rel');
                var an_tabname= $thisobj.attr('an_tabname');
                $array_storage[rel] = an_tabname ;
            });
            //全选按钮
            flags=0;//全选时候的标记
            $(document).on("click","#allcheck",function(){
                var $thisobj = $(this);
                if(flags==0){
                    var rel = $("#checkAll :checkbox");
                    for(var i=0;i<rel.length;i++){
                        cur=rel[i];
                        var curr=$(cur).attr("rel");
                        var currr=$(cur).attr("an_tabname");
                        $array_storage[curr] = currr ;
                    }
                    $("#checkAll :checkbox").prop("checked", true);
                    flags=1;
                    $thisobj.val("取消全选").css("background","#999");
                }else{
                    $("#checkAll :checkbox").prop("checked", false);
                    flags=0;
                    $thisobj.val("全选").css("background","#1b997a");
                }
            });
            //保存按钮
            var an_turn_up=null;
            $(document).on("click","#an_save",function(){
                if(flags==0){
                    layer.msg('您还没有选择数据，请选择数据后再保存分析', {
                        icon: 5,
                        time: 2000 //1秒关闭（如果不配置，默认是3秒）
                    }, function(){
                        flags=1;
                    });
                    return;
                }
                CSG.port.csg_dataAnalysis.getSaveData($array_storage,function(res){
                    an_turn_up=res.status;
                });
                layer.msg('您选取的数据已经存储到数据库中，请立即分析', {
                    icon: 6,
                    time: 2000 //1秒关闭（如果不配置，默认是3秒）
                }, function(){

                });
            });
            //分析选中跳转
            $(document).on("click","#carryUp_an",function(){
                if(an_turn_up!=0){
                    layer.msg('请您先选中数据后保存，再进行跳转操作', {
                        icon: 5,
                        time: 2000 //1秒关闭（如果不配置，默认是3秒）
                    }, function(){

                    });
                    return;
                }
                window.location.href = CSG.api+"/dataAnalysis/rendering/functionAnalysis";
            });
            //关系族群查询
            $(document).on("click","#guanxi",function(e){
                e.preventDefault();
                var thisgid=$(this).attr("gid");
                var an_search_a=$("#an_search_a");
                var a_an_an=$('<a href="javascript:void(0)" id="an_guanxi_liji" an_id="'+thisgid+'">'+'查看详情'+'</a>');
                an_search_a.empty().append(a_an_an);
                //var thisgid="#31:3";
                layer.open({
                    type: 1,
                    closeBtn :2,
                    area: [ '910px','630px'],
                    title: ["关系族群图", 'color:#7d909e;font-size:16px;font-weight:bold;background:rgba(0,0,0,0);font-family: "Microsoft Yahei";'],
                    content:$(".query_popup"),
                    shade: [0.7],
                    success:function(){
                        _this.getguanxizuqun(thisgid);
                    },
                    end:function(){
                        //关闭弹窗处理的
                    }
                });
            });
            //查看详情
            $(document).on("click","#an_guanxi_liji",function(e){
                e.preventDefault();
                var thisOBJ_id=$(this).attr("an_id");
                //console.log(thisOBJ_id);
                CSG.port.csg_dataAnalysis.getSeachInfoData(thisOBJ_id,0,10,function(res){
                    //console.log(res);
                    window.open("/dataAnalysis/rendering/dataAnalysisRel"+res.id,"_self")
                });
            });
            //默认先让查询结果消失
            //$(".query_content_content_header p:eq(1)").css("display","none");
            //tab切换
            $(".query_content_content_header p:eq(0)").addClass("h2PPP");
            $(document).on("click","#An_dataserching",function(){
                $(".query_content_content_box_part01").show();
                $(".query_content_content_box_part02").hide();
                $(".query_content_content_header p:eq(0)").addClass("h2PPP").siblings().removeClass("h2PPP");
            });
            $(document).on("click","#An_searchingrel",function(){
                $(".query_content_content_box_part01").hide();
                $(".query_content_content_box_part02").show();
                $(".query_content_content_header p:eq(1)").addClass("h2PPP").siblings().removeClass("h2PPP");
            });
            //echarts的table切换
            $(document).ready(function(){
            $("#jxy_age").click(function(){//点击one的时候
                $("#jxy_query_add").hide();//A1隐藏
                $("#jxy_query_style").hide();//A1隐藏
                $("#jxy_query_top").show();//A2显示
            });
            $("#jxy_region").click(function(){//点击two的时候
                $("#jxy_query_style").hide();
                $("#jxy_query_top").hide();
                $("#jxy_query_add").show();//A1显示
            });
                $("#jxy_models").click(function(){//点击one的时候
                    $("#jxy_query_add").hide();//A1隐藏
                    $("#jxy_query_top").hide();//A1隐藏
                    $("#jxy_query_style").show();//A2显示
                });
            });
        },
        //日期处理
        bind_LayUi_Event:function(){
            layui.use('laydate', function(){
                var laydate = layui.laydate;
                var start = {//开始时间
                    min:"1970-01-01 00:00:00"
                    ,max: '2099-06-16 23:59:59'//本世纪最大允许时间
                    ,istoday: true
                    ,format: 'YYYY-MM-DD hh:mm:ss' //日期格式
                    ,festival: true
                    ,choose: function(datas){//回调处理
                        end.min = datas; //开始日选好后，重置结束日的最小日期
                        end.start = datas;//将结束日的初始值设定为开始日
                    }
                };
                var end = {//结束时间
                    min: laydate.now()
                    ,max: '2099-06-16 23:59:59'
                    ,istoday: false
                    ,format: 'YYYY-MM-DD hh:mm:ss' //日期格式
                    ,choose: function(datas){//回调处理
                        start.max = datas; //结束日选好后，重置开始日的最大日期
                    }
                };
                $(document).on("click","#LAY_demorange_s",function(){
                    start.elem = this;
                    laydate(start);
                });
                $(document).on("click","#LAY_demorange_e",function(){
                    end.elem = this;
                    laydate(end);
                });
            });
        },
         //年龄分布
        bind_echarts_age_Event:function(data){
            var dom = document.getElementById("jxy_query_top");
            var myChart = echarts.init(dom);
            var app = {};
            var option = null;
            //app.title = '坐标轴刻度与标签对齐';
            option = {
                title : {
                    text: '年龄分布',
                    x: '5%',
                    y:"5",
                    textStyle:{
                        color:'#1b997a',
                        fontSize:14
                    }
                },
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
                        data :data[0],
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
                        data:data[1],
                        color:["#1b997a"]
                    }

                ]
            };

            if (option && typeof option === "object") {
                myChart.setOption(option, true);
            }
        },
        //地域分布
        bind_echarts_area_Event:function(data) {

            var dom = document.getElementById("jxy_query_add");
            var myChart = echarts.init(dom);
            var app = {};
            var option = null;

            option = {
                title: {
                    text: '地域分布',
                    x: '5%',
                    y:"5",
                    textStyle:{
                        color:'#1b997a',
                        fontSize:14
                    }
                },
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    orient: 'vertical',
                    data:data.mapname,
                    x: '5%',
                    y:"15%"
                },
                visualMap: {
                    min: 0,
                    max: 2500,
                    left: 'right',
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
                        name:data.sename,
                        type: 'map',
                        mapType: 'china',
                        roam: false,
                        label: {
                            normal: {
                                show: true
                            },
                            emphasis: {
                                show: true
                            }
                        },
                        data:data.mapdata
                    }
                ]
            };
            if (option && typeof option === "object") {
                myChart.setOption(option, true);
            }
        },
        //车型分布
        bind_echarts_carstyle_Event:function(data) {
            var dom = document.getElementById("jxy_query_style");
            var myChart = echarts.init(dom);
            var app = {};
            var option = null;
            option = {
                title: {
                    text: '车型分布',
                    x: '5%',
                    y:"5",
                    textStyle:{
                        color:'#1b997a',
                        fontSize:14
                    }
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    data:data.dataname,
                    x:"5%",
                    y:"20%"
                },
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: '55%',
                        center: ['50%', '60%'],

                        data:data.datadata,
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
        },
        //自动创建table表格处理返回数据是调用
        bind_Draw_Table_list: function (data) {
            //console.log(data);
            var limit=data.limit;//一页多少条
            var page=data.offset/data.limit + 1 ;//当前页
            var count = data.Count;//总条数
            var pagecount = count/limit+1;//总页数
            if (!data || data.length == 0) return;
            var $tab = $("#checkAll");
            var $trList = [];
            //动态创建tab
            for(var i = 0; i< Math.min(limit,count-data.offset);i++){
                var $tr = $("<tr>");
                var $item = data.data[i];
                //console.log($item);
                var newDate = new Date();//把时间戳转化为时间格式
                newDate.setTime($item.time * 1000);//把时间戳转化为时间格式
                $tr.append($("<td>").html('<input type="checkbox" name="An_tab_checkbox" class="An_tab_checkbox" rel="' + $item.id + '" an_tabname="'+ $item.table + "==>"+$item.title+ '" an_title="'+ $item.title +'">'));
                $tr.append($("<td>").html($item.title));
                $tr.append($("<td>").html($item.table));
                $tr.append($("<td>").html($item.number));
                $tr.append($("<td>").html(newDate.format('yyyy-MM-dd h:m:s')));
                $tr.append($("<td>").html($item.industry));
                $tr.append($("<td>").css("text-align","left").html('<a oid="' + $item.id + '" href="javascript:void(0)" class="chakanchakan" id="An_search_info" target="_self">查看</a>'+'<a href="javascript:void(0)" id="guanxi" gid="'+ $item.id+'">关系族群</a>'));
                $trList.push($tr);
            }
            $tab.empty().append($trList);
            //分页的回调
            pageClick01 = function(pageclickednumber) {//当前页
                $("#checkAll :checkbox").prop("checked", false);
                flags=0;
                $("#allcheck").val("全选").css("background","#1b997a");
                _this.getTableData($keyword, $theme, startTimeStamp,endTimeStamp, (pageclickednumber-1)*10 ,10, function (data) {
                    _this.bind_Draw_Table_list(data);
                });
                $(".pager01").pager({ pagenumber: pageclickednumber, pagecount: pagecount, buttonClickCallback: _this.pageClick01 });
            };
            //分页的第一次调用
            $(".pager01").pager({ pagenumber: page, pagecount: pagecount, buttonClickCallback: pageClick01 });
        },
        //获得查询后的信息数据
        getTableData: function ($keyword, $theme, startTimeStamp, endTimeStamp, offset, limit, callback) {
            var url=CSG.api+"/dataAnalysis/ports/port_dataAnalysis",
                JsonOdata = {
                    "title": $keyword,
                    "industry": $theme,
                    "timeS": startTimeStamp,
                    "timeE": endTimeStamp,
                    "offset":offset,
                    "limit":limit
                },
                success = function (res) {
                    if (res.statuscode == 1) {
                        callback && callback(res);
                    } else {
                        alert('获取列表数据失败');
                        console.log(res)
                    }
                },
                error = function (res) {
                    console.log(res, "这里是失败请求");//当后台没有设置正确接口格式的时候，走的是这个func
                };
            CSG.common.tool.ajax.post(url, JsonOdata, success, error);
        },
        //获得弹出层的数据
        getSeachInfoData: function (id,$offset,$limit,callback) {
            var url = CSG.api+"/dataAnalysis/ports/port_dataAnalysisDetails",
                JsonOdata={
                    "id": id,
                    "offset":$offset,
                    "limit":$limit
                },
                success = function (res) {
                    if (res) {
                        callback && callback(res);
                    } else {
                        alert('获取列表数据失败');
                        console.log(res)
                    }
                },
                error = function (res) {
                    console.log(res, "这里是失败请求");//当后台没有设置正确接口格式的时候，走的是这个func
                };
            CSG.common.tool.ajax.post(url, JsonOdata, success, error);
        },
        //保存当前数据到session里边，func页面要自动调用
        getSaveData:function($array_big,callback){
            var url = CSG.api+"/dataAnalysis/ports/csg_save_data",
                JsonOdata={
                   "savedata":$array_big
                },
                success = function (res) {
                    if (res) {
                        callback && callback(res);
                    } else {
                        alert('获取列表数据失败');
                        console.log(res)
                    }
                },
                error = function (res) {
                    console.log(res, "这里是失败请求");//当后台没有设置正确接口格式的时候，走的是这个func
                };
            CSG.common.tool.ajax.post(url, JsonOdata, success, error);
        },
        getguanxizuqun:function(thisgid){
            //关系族群
            var option=null;
            $.ajax({
                url:"/dataAnalysis/ports/csg_an_guanxi",
                data:{
                    "id": thisgid
                },
                type:"POST",
                success:function(d){
                    var xmlDoc="",xmlString = d;
                    if (document.implementation.createDocument) {
                        var parser = new DOMParser();
                        xmlDoc = parser.parseFromString(xmlString, "text/xml");
                    } else if (window.ActiveXObject) {
                        xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
                        xmlDoc.async = false;
                        xmlDoc.loadXML(xmlString);
                    }
                    var myChart = echarts.init(document.getElementById("relCanvas"));
                    myChart.hideLoading();
                    var xml = xmlDoc;
                    var graph = echarts.dataTool.gexf.parse(xml);
                    //console.log(graph);
                    var categories = [];
                    for (var i = 0; i < 9; i++) {
                        categories[i] = {
                            name: '类目' + i
                        };
                    }
                    graph.nodes.forEach(function (node,i) {
                        node.itemStyle = null;
                        node.symbolSize = 10;
                        node.value = node.symbolSize;
                        node.name=node.attributes.owner;
                        node.category = node.attributes.modularity_class;
                        //Use random x, y
                        node.x = node.y = null;
                        node.draggable = true;
                    });
                    console.log(graph);
                    option = {
                        title: {

                            subtext: 'Default layout',
                            top: 'bottom',
                            left: 'left'
                        },
                        tooltip: {},
                        legend: [{
                            left: 'left'
                            //data: categories.map(function (a) {
                            //    return a.name;
                            //})//控制图形
                        }],
                        animation: false,
                        series : [
                            {
                                name: 'Les Miserables',
                                type: 'graph',
                                layout: 'force',
                                data: graph.nodes,
                                links: graph.links,
                                categories: categories,
                                roam: true,
                                label: {
                                    normal: {
                                        position: 'right'
                                    }
                                },
                                force: {
                                    repulsion: 100
                                }
                            }
                        ]
                    };
                    myChart.setOption(option);
                }
            })
        }

    }
}();

