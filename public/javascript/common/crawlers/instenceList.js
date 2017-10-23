/**
 * Created by xx on 17-1-12.
 */
$(function () {

    function OPTIONS() {//分页对象初始化,构造函数
        var  options = {
            totalPages: 10,//总页数
            liNums: 5,//分页的数字按钮数(建议取奇数)
            activeClass: 'pageActive',//active类
            firstPage: '首页',//首页按钮名称
            lastPage: '末页',//末页按钮名称
            prv: '<',//前一页按钮名称
            next: '>',//后一页按钮名称
            hasFirstPage: false,//是否有首页按钮
            hasLastPage: false,//是否有末页按钮
            hasPrv: true,//是否有前一页按钮
            hasNext: true,//是否有后一页按钮
            callBack: function (page) {
                console.log(page);
            }
        }
        return options;
    }
    function dateNor(str){
        function getMyDate(){
            // new Date(parseInt(obj));
            // var oDate = obj,
            var oDate = new Date(parseInt(str)),
                oYear = oDate.getFullYear(),
                oMonth = oDate.getMonth()+1,
                oDay = oDate.getDate(),
                oHour = oDate.getHours(),
                oMin = oDate.getMinutes(),
                oSen = oDate.getSeconds(),
                oTime = oYear +'-'+ getzf(oMonth) +'-'+ getzf(oDay) +' '+ getzf(oHour) +':'+ getzf(oMin) +':'+getzf(oSen);//最后拼接时间
            return oTime;
        };
        //补0操作
        function getzf(num){
            if(parseInt(num) < 10){
                num = '0'+num;
            }
            return num;
        }
        return getMyDate();
    }

    var id = window.location.hash.slice(1);
    var url = '/crawlers/ports/jobInstenceList?jobId=' + id;
    CSG.common.tool.ajax.get(
        url,
        "",
        function (data) {
            console.info(data);
            var job = data.dataAll[0];
            (function (j) {//打印任务详情
                var c = j.data,t = dateNor(j.starts);
                $("#taskContent").html(`<li><span>任务名称&nbsp;:&nbsp;</span><span>${c.jobName}</span></li><li><span>任务描述&nbsp;:&nbsp;</span><span>${c.jobDesciber}</span></li><li><span>爬取链接&nbsp;:&nbsp;</span><span>${c.targetUrl}</span></li><li><span>时间&nbsp;:&nbsp;</span><span>${t}</span></li>`);
            }(job));
            (function(d,str){//打印list
                d.dataAll.map(i => str += `<li class="marginOverflowA"><p id="${i.rowkey}"><input type="checkbox"><a href="javascript:;">${dateNor(i.starts)}</a><i class="triangle"></i></p><div class="grapList marginOverflowB xxhide"></div></li>`);
                $("#instanceList").html(str);
            }(data,""));
            (function(str){//绑定a click事件
                str = "<div class='grapList marginOverflowB'>";
                $("#instanceList>li>p>a").click(function (e) {

                    e = e.target;
                    var li = $(e).parent().parent();
                    var id = e.parentElement.id?e.parentElement.id:0;
                    var elemI = $(e).next();
                    var otherI = $(e).parent().parent().siblings().find("i.rotate").removeClass("rotate");
                    (function (i) {//动画,及显示
                        i.toggleClass('rotate');
                        i.parent().next('div.grapList').toggleClass('xxhide');
                        i.parent().parent().siblings().find('div.grapList').addClass('xxhide');
                    }(elemI));
                    (id)&&(//优化判断
                        (function (id,str) {
                            //分页
                            var n = 3;
                            var url = "/crawlers/ports/jobInstenceOne?eId=" + id + "&ps=1&pe=" + n;
                            CSG.common.tool.ajax.get(
                                url,
                                "",
                                function (data) {
                                    console.log(data);
                                    var count = data.count;
                                    var ds = data.dataAll;
                                    for(var i=0;i<ds.length;i++){//默认打印
                                        var d = ds[i],s = "";
                                        if(d.data){
                                            console.log(d);
                                            // d.data.map(x => s += `${x.name} : ${x.val}`);
                                            for(var k in d.data){
                                                s += " - "+k+" - " + " : " + " - " + d.data[k] + " - ";
                                            }
                                            str += `<p><a href="javascript:;"><nobr id="${d.relevance.CID}">${s}</nobr></a></p>`
                                            str = (str.indexOf("<br>")!=-1)?str.replace("<br>","/"):(str.indexOf("<br/>")!=-1)? str.replace("<br/>","/"):str;
                                        }
                                    }
                                    str += "</div>"
                                    $(e).parent().next("div.grapList").html(str);
                                    var options = new OPTIONS();
                                    options.totalPages = data.count;
                                    if(!($(e).parent().next().find(".pageGrap"))[0]){
                                        $(e).parent().next().append($("<p><span class=\"page pageGrap\"></span></p>"));
                                    }
                                    var options = new OPTIONS();
                                    options.totalPages = Math.ceil( count/n );
                                    options.callBack = function (p) {
                                        var url = "/crawlers/ports/jobInstenceOne?eId=" + id + "&ps=" + (n*p-(n-1)) + "&pe=" + (n*p);
                                        CSG.common.tool.ajax.get(
                                            url,
                                            "",
                                            function (data) {
                                                console.log(data);
                                                var list = data.dataAll;
                                                (function (l,s) {
                                                    console.log(l);
                                                    var c = li.find(".grapList");
                                                    var ps = c.find("p");
                                                    for(var i=0;i<ps.length-1;i++){
                                                        (l[i])&&(
                                                            (function () {
                                                                s = "<a href='javascript:;'>";
                                                                s += "<nobr id='" + l[i].relevance.CID+ "'>";


                                                                for(var k in d.data){
                                                                    s += k + " : " + d.data[k];
                                                                }
                                                                // l[i].data.map(x=>s += `${x.name} : ${x.val}`)
                                                                s += "</nobr></a>";
                                                                console.info(s);
                                                               s = (s.indexOf("<br>")!=-1)?s.replace("<br>","/"):(s.indexOf("<br/>")!=-1)? s.replace("<br/>","/"):s;
                                                                c.find("p").eq(i).html(s)
                                                            }())
                                                        )
                                                    }
                                                }(list,""))

                                            },
                                            function (err) {
                                                err.msg="请求错误";
                                                console.log(err);
                                            }
                                        )
                                    }
                                    var listElem = $(e).parent().next("div.grapList");
                                    listElem.click(function (e) { //打印final detail
                                        e = e.target;
                                        if(e.nodeName == "NOBR"){
                                            var url = "/crawlers/ports/grapTextDetail?cId=" + e.id;
                                            CSG.common.tool.ajax.get(
                                                url,
                                                '',
                                                function (data) {
                                                    console.log(data);
                                                    // var date = dateNor(data.time);
                                                    var date = dateNor((new Date()).getTime());
                                                    $('#detailPop').css({display:'none'}) && $('#grapPop').css({display:'block'}) &&
                                                    $('#grapDetailTop').html('<div style="height: 100px; margin: 0 auto;"><span style="padding: .5em 1em;margin:5px 0 ;">抓取时间 : '+date+'</span><br><span style="padding: .5em 1em;margin:5px 0 ;">爬取连接 : '+ data.info.url +'</span></div>')
                                                    var str = "";
                                                    // $(data.data).each(function () {
                                                    //     str += "<p>"+ this.name + " : " + this.val +"</p>"
                                                    // })
                                                    for(var k in data.data){
                                                        str += "<p>"+ k + " : " + data.data[k] +"</p>"
                                                    }
                                                    str = (str.indexOf("<br>")!=-1)?str.replace("<br>","/"):(str.indexOf("<br/>")!=-1)? str.replace("<br/>","/"):str;
                                                    $("#grapText").html(str);
                                                    $('#xxmodal').css({display:'block'}) && $('#grapPop').css({display:'block'});
                                                }
                                            )
                                        }
                                    });
                                    var page = ($(e).parent().next().find(".pageGrap"));
                                    // console.log(page[0]);
                                    page.Page(options);
                                }
                            );
                        }(id,""))
                    )
                });
            }(""))
        });

    $("#navul li:eq(2)").addClass("current");//header导航部分
    $(".leftul li:eq(0)").addClass("current_left");//左侧导航部分
})
