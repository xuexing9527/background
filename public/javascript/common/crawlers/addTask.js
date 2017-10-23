/**
 * Created by xuexing on 16-12-14.
 */
$('#submitJob').click(function(){
    if($('[name = "jobName"]').val() && $('[name = "targetUrl"]').val()){
        var data = {start:null,end:null,priority:null,hierarchy:null,data:{}};
        $('#addTask input').each(function () {
            data.data[this.name] = this.value;
        });
        $('#addTask textarea').each(function () {
            data.data[this.id] =  this.value ;
        })
        data.data.type = data.data.type?data.data.type:0;//type,判定抓取层级,默认0
        data.start = (new Date()).getTime() + "";
        data.end = (new Date()).getTime() + "";
        data.priority = 1 + "";
        data.hierarchy = 4 + "";

        console.log(data.data);
        CSG.common.tool.ajax.post('/crawlers/ports/addTask',
            data,
            function(data){
                console.log( JSON.stringify(data));
                window.location.href='/crawlers/rendering/taskList';
            });
    } else{alert('任务名，爬取链接，爬取关键字，三项必填');}

});
$('#clean').click(function(){ // 清空按钮
    $('#addTask input').val('');
    $('#addTask textarea').val('');
})
$("#navul li:eq(2)").addClass("current");
$(".leftul li:eq(1)").addClass("current_left");//左侧导航部分