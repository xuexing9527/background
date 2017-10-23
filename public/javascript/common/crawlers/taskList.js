/**
 * Created by xuexing on 16-12-14.
 */
"use strict"

function dateNor(obj){
    function getMyDate(){
        var oDate = obj,
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
    /* table打印 */
    function praintTable(tableId, data) {
        // th 内容对照
        var hashTh = [];
        hashTh['任务名称']="jobName";
        hashTh['开始时间']='-';
        hashTh['结束时间']='-';
        hashTh['状态']='未执行';
        tableId = '#' + tableId;
        model(data);

        function model(data){
            /* 数据处理 */
            var obj = null;
            var str = '';//tbody内容
            $(data.data).each(function(r){

                obj = this;
                var tdS = '<tr><td><input type="checkbox" name="'+obj.rowkey+'"/></td>',
                    tdE = '<td><span class="runExample" id="'+obj.rowkey+'">立即执行</span></td></tr>',
                    tds = '';
                console.log(obj);
                $(tableId + ' th').each(function (i) {
                    //通过hash，对应th和td的位置关系
                    if(obj.data[hashTh[this.innerText]]&&(hashTh[this.innerText]=="jobName")) {
                        var key = [hashTh[this.innerText]];//此处为判断hash中没有此元素怎么办,xu修改hash
                        tds += '<td><a href="/crawlers/rendering/instenceList#'+parseInt( obj.rowkey )+'" target = "_blank">' + obj.data[key] + '</a></td>';
                    }else if(obj.data[hashTh[this.innerText]]) {
                        var key = [hashTh[this.innerText]];//此处为判断hash中没有此元素怎么办,xu修改hash
                        tds += '<td>' + obj.data[key] + '</td>';
                    }else if(hashTh[this.innerText])(
                        tds += '<td>'+ hashTh[this.innerText] +'</td>'
                    )
                });
                tds = tdS + tds + tdE;
                str += tds;
            });
            //打印tr
            $(tableId + ' tbody').html(str);
        }
    }
    var n = 10, // 当前 10条/页
        nowPage = null;//分页后续处理
    CSG.common.tool.ajax.get(//默认页打印
        '/crawlers/ports/jobList?pageStart=1&pageEnd=' + n,
        '',
        function(data){//页面加载分页数据
            console.log(data);
            praintTable('task',data);

            var pageAll = Math.ceil( parseInt(data.count - 1 )/n );
            var options = new OPTIONS();
            // options.totalPages = pageAll;
            options.totalPages = 10;
            options.callBack = function (page) {
                CSG.common.tool.ajax.get(
                    '/crawlers/ports/jobList?pageStart='+(page*n-(n-1))+'&pageEnd=' + (page*n),
                    '',
                    function(data) {//页面加载分页数据
                        console.log(data);
                        praintTable('task',data);
                    })
            }
            $('#homePage').Page(options)
        });

    $("#task tbody").click(function (e) {
        var elem = e.target;
        if(elem.nodeName=="SPAN"&&elem.innerText=="立即执行"){
           var id = parseInt(elem.id);
            var url = '/crawlers/ports/jobInstence?jobId=' + id;
            CSG.common.tool.ajax.get(
                url,
                '',
                function (data) {
                    console.log(data);
                    $(elem).parent().prev().text("执行中...");
                }
            )
        }
    })

    $('#checkout').click(function () {//查看
        // var checkedId=[];//被选择的
        // $("#task tbody td:first-child input").each(function (i) {
        //     this.checked&&checkedId.push(parseInt( this.name ));
        // })
        // console.log(checkedId[0]);//当前选择其第一个展示
        //
        // var url = '/crawlers/ports/jobInstenceList?jobId=' +checkedId[0];
        // CSG.common.tool.ajax.get(
        //     url,
        //     '',
        //     function (data) {
        //         // data = JSON.parse(data);
        //         console.log(data);
        //         if(data.dataAll.length){
        //             var instence = data.dataAll;
        //             (function (instence) { //打印内容
        //                 var jobName = instence[0].data.jobName,
        //                     desc = instence[0].data.jobDesciber,
        //                     url = instence[0].data.targetUrl;
        //                 var time = dateNor( new Date(parseInt( instence[0].starts )) );
        //                 arr = [jobName,desc,url,"汽车",time];
        //                 var ul = $("#taskDetail");
        //                 ul.find("li span:last-child").each(function (i) {
        //                     ul.find("li span:last-child")[i].innerText = arr[i];
        //                 })
        //                 var arr = [];
        //                 var str = "";
        //                 $(instence).each(function (i) {
        //                     var s = this.rowkey;
        //                     var date = null;
        //                     date = dateNor( new Date( parseInt( s.slice( s.indexOf("_")+1 ) ) ) );
        //                     str += `<li class="marginOverflowA"><p><input type="checkbox"><a href="#"><span>${date}</span></a><i class="triangle" id="${this.rowkey}"></i></p><div class="grapList marginOverflowB xxhide"><p><a href="javascript:;"></a></p><p><a href="javascript:;"></a></p><p><a href="javascript:;"></a></p></div></li>`
        //                     $("#eList").html(str);
        //                 })
        //             }(instence));
        //             // $('#xxmodal').css({display:'block'}) && $('#detailPop').css({display:'block'});
        //             window.location.href = "/crawlers/rendering/instenceList";
        //
        //             /*储存分页*/
        //             nowPage = parseInt( $("#homePage .pageActive").text() );
        //             console.log(nowPage);
        //             var options = new OPTIONS();
        //             options.callBack = function (page) {
        //                 console.log(page);
        //             }
        //             $('#popPage1').Page(options)
        //         }
        //     }
        // )
        //
        // //小三角旋转效果,有bug需调整
        // $('#eList').unbind("click"); //移除click
        // $("#eList").on("click",function (e) {
        //     var elem = e.target;
        //     if(elem.nodeName=="I"&&$(elem).hasClass("triangle")){
        //         //$("")其它的都去掉
        //         $(elem).toggleClass('rotate');
        //         var parm = $('div.grapList');
        //         $(elem).parent().next('div.grapList').toggleClass('xxhide');
        //         $(elem).parent().parent().siblings().find('div.grapList').addClass('xxhide');
        //         var listElem = $(elem).parent().next('div.grapList');//请求实例的内容
        //         var url = '/crawlers/ports/jobInstenceOne?eId=' + elem.id
        //         CSG.common.tool.ajax.get(
        //             url,
        //             '',
        //             function (data) {
        //                 console.log(data);
        //                 var grapDetail = null;
        //                 var count = data.count,
        //                     list = data.dataAll;
        //
        //                 var arr = [];
        //                 for(var k in list){
        //                     arr.push(list[k]);
        //                 }
        //                 list = arr;
        //                 // 分页
        //                 console.log(arr.length);
        //                 if(!($(elem).parent().parent().find(".pageGrap"))[0]){
        //                     $(elem).parent().next().append($("<p><span class=\"page pageGrap\"></span></p>"));
        //                 }
        //                 var options = new OPTIONS();
        //                 options.totalPages = Math.ceil( arr.length/3 );
        //                 options.callBack = function (page) {
        //                     var url = "/crawlers/ports/jobInstenceOne?eId=" + elem.id;
        //                     CSG.common.tool.ajax.get(
        //                         url,
        //                         "",
        //                         function (data) {
        //                             var n = 3;//每页显示3条
        //                             var list = data.dataAll;
        //
        //                             var arr = [];
        //                             for(var k in list){
        //                                 arr.push(list[k]);
        //                             }
        //                             list = arr;
        //                             $(list).each(function (i) {
        //                                 if(listElem.find("p>a")[i]){
        //                                     console.log(data);
        //                                     var str = "<nobr id=\""+ list[i+(page-1)*n].cid +"\">";
        //                                     console.log(list[i+(page-1)*n]);
        //                                     $(list[i+(page-1)*n].data).each(function () {
        //                                         str += this.name + " : " + this.val + ","
        //                                     })
        //                                     str += "</nobr>";
        //                                     // console.log(str);
        //                                     listElem.find("p>a")[i].innerHTML= str;
        //                                 }
        //                             })
        //                         },
        //                         function (err) {
        //                             err.msg="请求错误";
        //                             console.log(err);
        //                         }
        //                     )
        //                 }
        //                 var page = ($(elem).parent().next().find(".pageGrap"));
        //                 page.Page(options);
        //                 $(list).each(function (i) {
        //                     if(listElem.find("p>a")[i]){
        //                         console.log(this);
        //                         var str = "<nobr id=\""+ this.cid +"\">";
        //                         $(this.data).each(function () {
        //                             str += this.name + " : " + this.val + ","
        //                         })
        //                         str += "</nobr>";
        //                         listElem.find("p>a")[i].innerHTML= str;
        //                     }
        //                 })
        //                 listElem.click(function (e) { //打印final detail
        //                     e = e.target;
        //                     if(e.nodeName == "NOBR"){
        //                         var url = "/crawlers/ports/grapTextDetail?cId=" + e.id;
        //                         CSG.common.tool.ajax.get(
        //                             url,
        //                             '',
        //                             function (data) {
        //                                 console.log(data);
        //                                 var date = dateNor(new Date( parseInt(data.time) ));
        //                                 $('#detailPop').css({display:'none'}) && $('#grapPop').css({display:'block'}) &&
        //                                 $('#grapDetailTop').html('<div style="height: 100px; margin: 0 auto;"><span style="padding: .5em 1em;margin:5px 0 ;">抓取时间 : '+date+'</span><br><span style="padding: .5em 1em;margin:5px 0 ;">爬取连接 : '+ data.url +'</span></div>')
        //                                 var str = "";
        //                                 $(data.data).each(function () {
        //                                     str += "<p>"+ this.name + " : " + this.val +"</p>"
        //                                 })
        //                                 $("#grapPop div.popContainer div.bottom div.exampleOverview").html(str);
        //                             }
        //                         )
        //                     }
        //                 })
        //
        //             },
        //             function (err) {
        //                 console.log("-- 错误请求 --")
        //                 console.log(err);
        //                 console.log("----")
        //             }
        //         )
        //
        //
        //     }
        // })
        $("#task tbody td:first-child input").each(function (i) {
            if(this.checked){
                var id = parseInt( this.name );
                // window.location.href = "/crawlers/rendering/instenceList#" + id;
                window.open("/crawlers/rendering/instenceList#" + id,"_blank");
            }
        })
    });

    // $("#detailPopClose").click(function () {//关闭按钮
    //     $("#xxmodal").css({"display":"none"})
    //     $("#detailPop").css({"display":"none"})
    //
    //     /**
    //      * 初始化页面分页，避免和弹窗的时间覆盖
    //      */
    //     var options = new OPTIONS();
    //     options.callBack = function (page) {
    //         CSG.common.tool.ajax.get(
    //             '/crawlers/ports/jobList?pageStart='+(page*n-(n-1))+'&pageEnd=' + (page*n),
    //             '',
    //             function(data) { //页面加载分页数据
    //                 console.log(data);
    //                 praintTable('task',data);
    //             })
    //     }
    //     $('#homePage').Page(options) //分页
    //     $("#homePage li a").each(function (i) { //当前页标识
    //         (nowPage>=(options.liNums+1)/2)
    //             ? (this.innerHTML=(i+nowPage-(options.liNums-1)/2))
    //             : (this.innerHTML =(i+1));
    //         $("#homePage li a").each(function () { //加分页标注class
    //             $(this).removeClass("pageActive");
    //             (parseInt($(this).text())==nowPage)&&($(this).addClass("pageActive"));
    //         })
    //     })
    // });

    // $('#grapList').click(function (e) {//单条详情
    //     (function () {
    //         (e.target.nodeName == 'A' ) && (
    //             $('#detailPop').css({display:'none'}) && $('#grapPop').css({display:'block'}) &&
    //             $('#grapDetailTop').html('<div style="width: 60%;line-height: 100px; margin: 0 auto;text-align: center;"><span style="padding: .5em 3em;">抓取时间 : 2016-12-14</span><span style="padding: .5em 3em;">爬取连接 : www.xx.com</span></div>')
    //         );
    //     }());
    // });



    $(".leftul li:eq(0)").addClass("current_left");//左侧导航部分
    $("#navul li:eq(2)").addClass("current");
})





