;
! function() {
    CSG.port.csg_dataAnalysisrel = {
        say: function() {
            //console.log("hi")
        },
        init: function() {
            this.bindEvent();
            //this.gettanchuceng();//显示当前页面获得的表格及其数据
            this.getSeachInfoData(window.location.hash,0,10,function(res){
                _this.bind_Draw_Table_detail(res);
            });
        },
        //绑定事件处理
        bindEvent: function() {//
            this.bind_Click_Event();
            $("#navul li:eq(1)").addClass("current");
            $(".leftul li:eq(0)").addClass("current_left");//左侧导航部分
        },
        //绑定各种事件处理
        bind_Click_Event: function(){
            _this=this;
            var $array_flags=0;
            $(document).on('click', '#rel_keep', function(){
                if($array_flags==0){
                    layer.msg('请先选择数据，然后在进行群组分析', {
                        icon: 5,
                        time: 2000 //1秒关闭（如果不配置，默认是3秒）
                    }, function(){

                    });
                    return;
                }
                layer.open({
                    type: 1,
                    closeBtn :2,
                    area: [ '910px','630px'],
                    title: ["关系族群图", 'color:#7d909e;font-size:16px;font-weight:bold;background:rgba(0,0,0,0);font-family: "Microsoft Yahei";'],
                    content:$(".relPop"),
                    shade: [0.7],
                    success:function(){

                    },
                    end:function(){
                        //关闭弹窗处理的
                    }
                });
            });
            //单选按钮
            var array_rel=[];// 用来保存具体的数组的值，可以就是族群的第一个参数，可以为空也可以无限传
            $(document).on("click",".yAn_tab_checkbox",function(){
                $array_flags=1;
                var $thisobj = $(this);
                var oid = $thisobj.attr('oid');
                array_rel.push(oid);
            });
            //弹窗之后的立即查询
            $(document).on('click', '#rel_sub', function(e){
                e.preventDefault();
                var relarr=array_rel.yinwu_unique();
                var strquery=relarr.join(",");
                _this.getguanxizuqun(strquery);
            });
            $(document).on('click', '#an_miabao', function(){

                window.open("/dataAnalysis/rendering/dataAnalysisRel"+ window.location.hash,"_self");

            });
        },
        bind_Draw_Table_detail:function(data){
            var limit=data.limit;//一页多少条
            var page=data.offset/data.limit + 1 ;//当前页
            var count = data.number;//总条数
            var pagecount = count/limit+1;//总页数
            var car_crawlers=$(".car_crawlers").html(data.table);
            var newDate = new Date();//把时间戳转化为时间格式
                newDate.setTime(data.time * 1000);//把时间戳转化为时间格式
            var import_time=$(".import_time").html(newDate.format('yyyy-MM-dd h:m:s'));
            var car_counts=$(".car_counts").html(count);
            if (!data || data.length == 0) return;
            var $tab = $("#search_info_table_tbody");
            var $trList = [];
            //动态创建tab
            for(var i = 0; i< Math.min(limit,count-data.offset);i++){
                var $tr = $("<tr>");
                var $item = data.totalInfo[i];
                $tr.append($("<td>").html('<input type="checkbox" name="yAn_tab_checkbox" class="yAn_tab_checkbox" oid="' + $item.id + '">'));
                $tr.append($("<td>").html($item.username));
                $tr.append($("<td>").html($item.gender));
                $tr.append($("<td>").html($item.age));
                $tr.append($("<td>").html($item.industry));
                $trList.push($tr);
            }
            $tab.empty().append($trList);
            //分页的回调
            pageClick02 = function(pageclickednumber) {//当前页
                //_this = this;
                _this.getSeachInfoData(window.location.hash,(pageclickednumber-1)*10 ,10, function (data) {
                    _this.bind_Draw_Table_detail(data);
                });
                $(".pager02").pager({ pagenumber: pageclickednumber, pagecount: pagecount, buttonClickCallback: _this.pageClick02 });
            };
            $(".pager02").pager({ pagenumber: page, pagecount: pagecount, buttonClickCallback: pageClick02 });
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
                        //console.log(res, "这里是成功请求");
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
        gettanchuceng:function(){
            //打印table
            CSG.common.tool.ajax.post (CSG.api+"/dataAnalysis/ports/port_dataAnalysisDetails",
                {
                    "id": window.location.hash,
                    "offset":10,
                    "limit":10
                },
                function(data){
                    // console.log(data);
                    var str = "<table><tbody>";
                    data.totalInfo.map(d => str += `<tr><td><input type="checkbox" class="chosise"></td><td>${d.age}</td><td>${d.gender}</td><td>${d.id}</td><td>${d.industry}</td><td>${d.profession}</td><td>${d.username}</td></tr>`);
                    str += "</tbody></table>";
                    $(".tabalbox").append(str);
                });
        },
        getguanxizuqun:function(id){
            //关系族群
            var dimension=$(".relselectw").val(),statu=$(".relselectx").val();
            $.ajax({
                url:"/dataAnalysis/ports/csg_rel",
                data:{
                    id: id,
                    dimension:dimension,
                    statu:statu
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




