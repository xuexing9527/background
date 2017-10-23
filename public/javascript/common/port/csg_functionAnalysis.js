;
! function() {
    CSG.port.csg_functionAnalysis = {
        say: function() {
            console.log("hi")
        },
        init: function() {
            this.bindEvent();
        },
        //绑定事件处理
        bindEvent: function() {//
            this.bind_Click_Event();//所有点击事件的集合
            //获取右上角数据
            this.get_oid_cookie_data(function(res){
                var $tab=$("#func_tbody");
                var $list=[];
                if(res.savedata){
                    //console.log(res.savedata);
                    for(var key in res.savedata){
                        $tr=$("<tr>");
                        $tr.append($("<td>").addClass("td1").html('<input type="radio" value="'+ key+'" class="soso" name="func_radio">'));
                        $tr.append($("<td>").addClass("tdd1").html(res.savedata[key]));
                        $tr.append($("<td>").addClass("tddd1").html('<input type="button" value="删除" class="soso" id="func_delete">'));
                        $list.push($tr);
                    }
                    $tab.empty().append($list);
                }
            });
            $("#navul li:eq(1)").addClass("current");//主导航位置
            $(".leftul li:eq(1)").addClass("current_left");//左侧导航部分
            this.bind_turn_up_event();
            //获得保存的sql语句
            this.get_func_task_get(function(res){
                if(res.status==0) {
                    $(".clone_node").remove();
                    var $ultab = $(".anlysis-boxone");
                    var $ultabarray = [];
                    var str = "";
                    for(var keyss in res.sqlobj){
                        var curtask = res.sqlobj[keyss];
                        var sqlStr = curtask.sqlstr;
                        str += "<li class='anlysis-lione clearfix clone_node'>";
                        str += '<a href=\'javascript:void(0)\' class=\'func_sql\' select="' + curtask.select + '" where="' + curtask.where + '" orderby="' + curtask.orderby + '" groupby="' + curtask.groupby + '" sqlstr="' + sqlStr + '">' + curtask.sqlname + '</a>';
                        str += "<input type='button' value='删除' class='deleat func_sql_delete' uid=" + curtask.uid + ">";
                        str += "</li>";
                    }
                    $ultabarray.push(str);
                    $ultab.append($ultabarray);
                }
            });
        },
        //保存sql语句
        get_func_task:function(sqlobj,callback){
            var url = CSG.api+"/dataAnalysis/ports/csg_sql_save_data",
                JsonOdata=sqlobj,
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
            console.log(JsonOdata);
            CSG.common.tool.ajax.post(url, JsonOdata, success, error);
        },
        //获得sql语句
        get_func_task_get:function(callback){
            var url = CSG.api+"/dataAnalysis/ports/csg_sql_get_data",
                JsonOdata={
                    "token":1
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
        //删除sql语句
        get_func_task_delete:function(uid,callback){
            var url = CSG.api+"/dataAnalysis/ports/csg_sql_delete_data",
                JsonOdata={
                    "uid":uid
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
        //获取右上角数据
        get_oid_cookie_data:function(callback){
            _this=this;
            var url = CSG.api+"/dataAnalysis/ports/csg_get_save_data",
                JsonOdata={
                    "token":1
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
        //删除右上角数据
        get_delete_save_data:function(current_value,callback){
            var url = CSG.api+"/dataAnalysis/ports/csg_delete_save_data",
                JsonOdata={
                    "current_value":current_value
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
        //绑定各种事件处理
        bind_Click_Event: function(){
            _this=this;
            //点击左侧单选框
            var $array_flags=0;
            $(document).on('click', "#func_tbody input[type='radio']", function(){
                $thisobj=$(this);
                for(var i=0;i<$thisobj.length;i++) {
                    var cur = $thisobj[i];
                    oid = $(cur).val();//点击当前的值，负责传给后台的任务id
                    oid_taskname = $(cur).parents("td").siblings("td:eq(0)").html();//要保存的任务名称
                    //console.log(oid_taskname);
                }
                $array_flags=1;
            });
            //点击左上角的删除按钮
            $(document).on('click', '#func_delete', function() {
                var $this__obj=$(this);
                layer.msg('你确定要删除么？', {
                    time: 0, //不自动关闭
                    btn: ['确定', '取消'],
                    yes: function( index, layero){
                        var current_value = $this__obj.parent("td").parent("tr").children("td:eq(0)").children("input").val();
                        _this.get_delete_save_data(current_value,function(res){
                            if(res.status==0){//删除成功的标志
                                $this__obj.parent("td").parent("tr").remove();
                            }
                        });
                        layer.close(index);
                    },
                    btn2:function(index, layero){
                        layer.close(index);
                    }
                });
            });
            //点击分析按钮
            var is_save=1;
            var func_select="",func_from="",func_where="",func_order="",func_group="",func_id="";
            $(document).on('click', '.ananananana', function(){
                is_save=0;
                if($array_flags==0){
                    layer.msg('请先选择要分析的任务，在进行分析', {
                        icon: 5,
                        time: 2000 //1秒关闭（如果不配置，默认是3秒）
                    }, function(){

                    });
                    return;
                }
                func_select=$("#func_select").val();
                func_from="dataMart ";
                func_where=$("#func_where").val();
                func_group=$("#func_group").val();
                func_order=$("#func_order").val();
                func_id="mate.@rid=";

                func_select = func_select =="" ? "*" : func_select;
                func_where = func_where == "" ? "" :  func_where;
                func_group = func_group == "" ? "" : " group by " + func_group;
                func_order = func_order == "" ? "" : " order by " + func_order;
                sql_limit=$("#func_sql").val();
                //sql语句
                func_sql="select " + func_select +
                         " from " + func_from +
                         "where " + func_id + oid + func_where +
                         func_group +
                         func_order;
                //var func_sql="select * from dataMart where mate.@rid=#33:16";
                //console.log(func_sql);
                _this.getSqlData(func_sql,sql_limit,function(res){
                    //console.log(res);
                    _this.bind_Draw_tab_Event(res);
                    _this.bind_gender_port(res);
                    _this.bind_province_set(res);
                    //_this.bind_zoushi(res);
                });
            });
            //点击折叠按钮
            $(document).on("click",".zhediezhedie",function(){
                $(this).parents("li").parents(".anlysis_ul_ul").siblings(".anlysis_ul").stop().slideToggle();
            });
            //点击查看实例的按钮
            $(document).on('click', '.popup_search', function(){
                var $thisPopup=$(this);
                var sid=$thisPopup.attr("sid");
                layer.open({
                    type: 1,
                    closeBtn :2,
                    area: [ '910px','630px'],
                    title: ["数量详情", 'color:#7d909e;font-size:16px;font-weight:bold;background:rgba(0,0,0,0);font-family: "Microsoft Yahei";'],
                    content:$("#func_popup"),
                    shade: [0.2],
                    success:function(){
                        _this.getWaitAnData(sid,function(res){
                            //console.log(res);
                            _this.bind_Draw_popup_Event(res);
                        });
                    },
                    end:function(){

                    }
                });
            });
            //点击保存把分析的sql语句保存起来
            var $select="",$where="",$orderby="",$groupby="",sqlobj={};
            $(document).on('click', '#func_save', function(){
                if(is_save==0){
                    layer.prompt({
                        formType: 0,
                        value: 'sql1',
                        title: 'sql语句名称'
                    }, function(value, index, elem){
                        $select=func_select;
                        $where=func_where;
                        $orderby=func_order;
                        $groupby=func_group;
                        task_obj={
                            sqlname:value,
                            sqlstr:func_sql,
                            uid:oid,
                            select:$select,
                            where:$where,
                            orderby:$orderby,
                            groupby:$groupby
                        };
                        sqlobj[oid]=task_obj;
                        _this.get_func_task(sqlobj,function(res){
                            //获得保存的sql语句
                            _this.get_func_task_get(function(res){
                                if(res.status==0) {
                                    $(".clone_node").remove();
                                    var $ultab = $(".anlysis-boxone");
                                    var $ultabarray = [];
                                    var str = "";
                                    for(var keyss in res.sqlobj){
                                        var curtask = res.sqlobj[keyss];
                                        var sqlStr = curtask.sqlstr;
                                        str += "<li class='anlysis-lione clearfix clone_node'>";
                                        str += '<a href=\'javascript:void(0)\' class=\'func_sql\' select="' + curtask.select + '" where="' + curtask.where + '" orderby="' + curtask.orderby + '" groupby="' + curtask.groupby + '" sqlstr="' + sqlStr + '">' + curtask.sqlname + '</a>';
                                        str += "<input type='button' value='删除' class='deleat func_sql_delete' uid=" + curtask.uid + ">";
                                        str += "</li>";
                                    }
                                    $ultabarray.push(str);
                                    $ultab.append($ultabarray);
                                }
                            });
                        });
                        layer.close(index);
                    });
                }else{
                    layer.msg('请先分析，再进行保存', {
                        icon: 5,
                        time: 2000 //1秒关闭（如果不配置，默认是3秒）
                    }, function(){

                    });
                    return;
                }
            });
            //点击删除处理，左下角的删除
            $(document).on('click', '.func_sql_delete', function(){
                var $this_obj=$(this);
                layer.msg('你确定要删除么？', {
                    time: 0, //不自动关闭
                    btn: ['确定', '取消'],
                    yes: function(index, layero){
                        var uid=$this_obj.attr("uid");
                        console.log(uid);
                        $this_obj.parent("li").remove();
                        _this.get_func_task_delete(uid,function(res){
                            if(res.status==0){
                                console.log(res);
                            }
                        });
                        //$.cookie('csg_func_table', JSON.stringify(task_array), { expires: 30, path: '/' });
                        layer.close(index);
                    },
                    btn2:function(index, layero){
                        layer.close(index);
                    }
                });
            });
            //点击清空，所有的数据全部清空
            $(document).on('click', '#func_quite', function(){
                $(".input-2").val("");
            });
            //点击sql语句呈现，右侧内容,特意加的五条数据
            $(document).on('click', '.func_sql', function(){
                var $this_obj_sql=$(this);
                var strsql=$this_obj_sql.attr("sqlstr");
                var select=$this_obj_sql.attr("select");
                var where=$this_obj_sql.attr("where");
                var orderby=$this_obj_sql.attr("orderby");
                var groupby=$this_obj_sql.attr("groupby");
                var orderbysub=orderby.substr(10);
                var groupbysub=groupby.substr(10);
                console.log(strsql);
                $("#func_select").val(select);
                $("#func_where").val(where);
                $("#func_order").val(orderbysub);
                $("#func_group").val(groupbysub);
                sql_limit=$("#func_sql").val();
                _this.getSqlData(strsql,sql_limit,function(res){
                    _this.bind_Draw_tab_Event(res);
                    _this.bind_gender_port(res);
                    _this.bind_province_set(res);
                });
            });
            $(document).on("click",".func_sqlone",function(){
                $("#func_select").val("model,count(1)");
                $("#func_where").val();
                $("#func_order").val("count desc");
                $("#func_group").val("model");
                var strsql="select model,count(1) from dataMart where mate.@rid=#28:0 group by model order by count desc";
                sql_limit=$("#func_sql").val();
                _this.getSqlData(strsql,sql_limit,function(res){
                    _this.bind_Draw_tab_Event(res);
                    _this.bind_gender_port(res);
                    _this.bind_province_set(res);
                });
            });
            $(document).on("click",".func_sqltwo",function(){
                $("#func_select").val("gender,count(1)");
                $("#func_where").val();
                $("#func_order").val("count desc");
                $("#func_group").val("gender");
                var strsql="select gender,count(1) from dataMart where mate.@rid=#28:0 group by gender order by count desc";
                sql_limit=$("#func_sql").val();
                _this.getSqlData(strsql,sql_limit,function(res){
                    _this.bind_Draw_tab_Event(res);
                    _this.bind_gender_port(res);
                    _this.bind_province_set(res);
                });
            });
            $(document).on("click",".func_sqlthree",function(){
                $("#func_select").val("domicile,count(1)");
                $("#func_where").val("and domicile <> ''");
                $("#func_order").val("count desc");
                $("#func_group").val("domicile");
                var strsql="select domicile,count(1) from dataMart where mate.@rid=#30:4 and domicile <> '' group by domicile order by count desc";
                sql_limit=$("#func_sql").val();
                _this.getSqlData(strsql,sql_limit,function(res){
                    _this.bind_Draw_tab_Event(res);
                    _this.bind_gender_port(res);
                    _this.bind_province_set(res);
                });
            });
            $(document).on("click",".func_sqlfour",function(){
                $("#func_select").val("domicile,model,count(1)");
                $("#func_where").val("and domicile <> ''");
                $("#func_order").val("count desc");
                $("#func_group").val("domicile,model");

                var strsql="select domicile,model,count(1) from dataMart where mate.@rid=#31:3 and domicile <> '' group by domicile,model order by count desc";
                sql_limit=$("#func_sql").val();
                _this.getSqlData(strsql,sql_limit,function(res){
                    _this.bind_Draw_tab_Event(res);
                    _this.bind_gender_port(res);
                    _this.bind_province_set(res);
                });
            });
            $(document).on("click",".func_sqlfive",function(){
                $("#func_select").val("domicile,model,count(1)");
                $("#func_where").val("and domicile <> ''");
                $("#func_order").val("count desc");
                $("#func_group").val("domicile,model");
                var strsql="select domicile,model,count(1) from dataMart where mate.@rid=#29:1 and domicile <> '' group by domicile,model order by count desc ";
                sql_limit=$("#func_sql").val();
                _this.getSqlData(strsql,sql_limit,function(res){
                    _this.bind_Draw_tab_Event(res);
                    _this.bind_gender_port(res);
                    _this.bind_province_set(res);
                });
            });
        },
        //动态生成查询数据表格
        bind_Draw_tab_Event:function(data){
            var data=data.result;
            //console.log(data);
            var offset=0;
            var limit=10;//一页多少条
            var page=offset/limit + 1 ;//当前页
            var count = data.length;//总条数
            var pagecount = count/limit+1;//总页数
            if (!data || data.length == 0) return;
            var $func_tab = $("#func_table");
            var $func_trList = [];
            //拼接thead
            var strThead="<thead><tr>";
            var $item1 = data[0];
            //console.log($item1);
            var arr = [];
            for(var key1 in $item1){
                if(!/^@\w+/.test(key1) && $item1[key1]!=''){
                    arr.push(key1);
                    strThead += "<th>"+key1+"</th>";
                }
            }
            strThead += "</tr></thead>";
            $func_trList.unshift(strThead);
            //拼接tbody
            var strtbody="<tbody>";
            for(var i=0;i<data.length;i++){
                var $item = data[i];
                strtbody+="<tr>";
                for(var j=0;j<arr.length;j++){
                    //$item[arr[j]],这个值有可能是"#10:11"  ||  [ "#10:11" ， "#14:43" ]
                    var $val = "";
                    if($.isArray( $item[arr[j]])){
                        $( $item[arr[j]] ).each(function( index ) {
                            $val += ($item[arr[j]][index]+"").replace(/(#\d+:\d+)/g,'<a href="$1" class="popup_search">$1</a>');
                        });
                    }else{
                            $val = ($item[arr[j]]+"").replace(/(#\d+:\d+)/g, '<a href="$1" class="popup_search" sid="$1">$1</a>');
                    }
                    strtbody += "<td>"+ $val+"</td>";
                }
                strtbody+="</tr>";
            }
            strtbody+="</tbody>";
            $func_trList.push(strtbody);
            $func_tab.empty().append($func_trList);
        },
        //获得sql语句的及其表格的接口
        getSqlData:function(func_sql,sql_limit,callback){
            var url = CSG.api+"/dataAnalysis/ports/csg_functionsql",
                JsonOdata={
                    "jsons":func_sql,
                    "offset":0,
                    "limit":sql_limit
                },
                success=function(res){
                    if(res.status==400){
                        layer.alert('您的sql语句有问题，请重新输入sql语句', {icon: 6});
                        return;
                    }
                    if (res) {
                        callback && callback(res);
                        //console.log(res, "这里是成功请求");
                    } else {
                        alert('获取列表数据失败');
                        console.log(res)
                    }
                },
                error=function(res){
                    console.log(res);
                };
            //console.log(JsonOdata);
            CSG.common.tool.ajax.post(url, JsonOdata, success, error);
        },
        //动态生成详情表格
        bind_Draw_popup_Event:function(res){
            var data=res.result[0];
            console.log(data);
            var $tab_func_popup = $("#func_popup_table_tbody");
            var $trList_func_popup = [];
            for(var key in data){
                var $item = data[key];
                if(!/^@\w+/.test(key) && $item[key]!=''){
                    var $tr = $("<tr>");
                    $tr.append($("<td>").html(key+"==>"+$item));
                }
                $trList_func_popup.push($tr);
            }
            $tab_func_popup.empty().append($trList_func_popup);
        },
        //获得弹窗id的接口
        getWaitAnData: function(sid,callback) {
            var url = CSG.api+"/dataAnalysis/ports/csg_function_popup",
                JsonOdata={
                    "sid":sid
                },
                success=function(res){
                    if (res) {
                        callback && callback(res);
                        //console.log(res, "这里是成功请求");
                    } else {
                        alert('获取列表数据失败');
                        console.log(res)
                    }
                },
                error=function(res){
                    console.log(res);
                };
            CSG.common.tool.ajax.post(url, JsonOdata, success, error);
        },
        //右下角tab切换，地图跟比例
        bind_turn_up_event:function(){
            ///console.log($(".function-liboxul"));
            $(".function-liboxul a:eq(0)").addClass("currentcolor");
            $(".function-liboxul a").click(function(){
                //alert(1111111)
                $(this).addClass("currentcolor").siblings().removeClass("currentcolor");
            });
            $(".function-show").click(function(){
                $("#resultdefault").show();
                $("#resultecharts-map").hide();
                $("#resultecharts").hide();
            });
            $(".function-pic").click(function(){
                $("#resultecharts-map").hide();
                $("#resultecharts").show();
                $("#resultdefault").hide();
            });
            $(".function-map").click(function(){
                $("#resultecharts").hide();
                $("#resultecharts-map").show();
                $("#resultdefault").hide();
            });
        },
        //获得性别比例的echars
        bind_gender_port:function(datafrom){
            //console.log(datafrom.result);
            var resultss=datafrom.result;
            var countpro="",domicile="";
            var proarray=[],countarray=[];
            var proobj={},proarr=[];
            for(var i=0 ;i<resultss.length;i++){
                for(var cc in resultss[i]){
                  if(cc == 'count') countpro=resultss[i][cc]
                  else if (cc.indexOf('@')==-1 && cc.indexOf('_')==-1  )  domicile=resultss[i][cc]
                }
                proarray.push(domicile);
                countarray.push(countpro);
            }
            //console.log(proarray);
            //console.log(countarray);
            for(var k=0;k<proarray.length;k++){
                prokey=proarray[k];
                provalue=countarray[k];
                proobj={
                    value:provalue,
                    name:prokey
                };
                proarr.push(proobj);
            }
            //console.log(proarr);
            var valuemale=datafrom.result[0];
            var sex1=valuemale.gender;
            var counts1=valuemale.count;
            var valuefamale=datafrom.result[1];
            var sex2=valuefamale.gender;
            var counts2=valuefamale.count;
            //当前echars实例
            var myChart = echarts.init(document.getElementById("resultecharts"));
            //操作对象实例
            //echars对象参数
            var option = null;
            var data=[
                {
                    sex:sex2,
                    counts:counts2
                },{
                    sex:sex1,
                    counts:counts1
                }
            ];
            option = {
                title : {
                    text: '比例',
                    x: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: proarray
                        //[data[0].sex,data[1].sex]
                },
                series : [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius : '55%',
                        center: ['50%', '60%'],
                        data:proarr,
                            //[
                        //    {value:data[0].counts, name:data[0].sex},
                        //    {value:data[1].counts, name:data[1].sex}
                        //],
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
            //echars执行
            if (option && typeof option === "object") {
                myChart.setOption(option, true);
            }
        },
        //获得省市分布的echars
        bind_province_set:function(res){
           //console.log(res.result);
            var result=res.result;
            var car_model=null,province=null,pro_counts=null;
            var seri_list={};
            for(var i=0;i<result.length;i++){
                var curresult=result[i];
                car_model=curresult.model;
                province=curresult.domicile;
                pro_counts=curresult.count;
                if(!(function(elements,key) {
                    var bln = false;
                    try {
                        for (var ekey in  elements) if (ekey == key)  bln = true;
                    } catch (e) {
                        bln = false;
                    }
                    return bln;
                })(seri_list,car_model)){
                    seri_list[car_model] = [];
                }
                seri_list[car_model].push({name: province,value: pro_counts })
            }
            var series_array=[];
            var series_obj={};
            var model_array=[];
            for(var mod in seri_list){
                series_obj=
                {
                    name: mod,
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
                    data: seri_list[mod]
                };
                series_array.push(series_obj);
                model_array.push(mod);
            }
            var myChart = echarts.init(document.getElementById("resultecharts-map"));
            var option = null;
            option = {
                title: {
                    text: '地区分布',
                    //subtext: '纯属虚构',
                    left: 'center'
                },
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    orient: 'vertical',
                    left: '1%',
                    data:model_array
                },
                visualMap: {
                    min: 0,
                    max: 2500,
                    left: 'right',
                    top: 'bottom',
                    text: ['高', '低'],           // 文本，默认为数值文本
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
                series: series_array
            };
            //执行
            if (option && typeof option === "object") {
                myChart.setOption(option, true);
            }
        },
        //走势图echars暂时没有
        bind_zoushi:function(res){
            //走势图
           // console.log(res);
            var myChartone = echarts.init(document.getElementById("resultecharts-trend"));
            option = null;
            option = {
                title: {
                    //text: '堆叠区域图'
                },
                tooltip : {
                    trigger: 'axis'
                },
                legend: {
                    data:['雅阁','宝马','奔驰','宾利','大众']
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    },
                    show : false
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
                        boundaryGap : false,
                        data : ['50后','60后','70后','80后','90后','00后','10后']
                    }
                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ],
                series : [
                    {
                        name:'雅阁',
                        type:'line',
                        stack: '总量',
                        areaStyle: {normal: {}},
                        data:[120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name:'宝马',
                        type:'line',
                        stack: '总量',
                        areaStyle: {normal: {}},
                        data:[220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name:'奔驰',
                        type:'line',
                        stack: '总量',
                        areaStyle: {normal: {}},
                        data:[150, 232, 201, 154, 190, 330, 410]
                    },
                    {
                        name:'宾利',
                        type:'line',
                        stack: '总量',
                        areaStyle: {normal: {}},
                        data:[320, 332, 301, 334, 390, 330, 320]
                    },
                    {
                        name:'大众',
                        type:'line',
                        stack: '总量',
                        label: {
                            normal: {

                            }
                        },
                        areaStyle: {normal: {}},
                        data:[820, 932, 901, 934, 1290, 1330, 1320]
                    }
                ]
            };
            //执行
            if (option && typeof option === "object") {
                myChartone.setOption(option, true);
            }
        }

    }
}();

