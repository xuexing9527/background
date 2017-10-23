/**
 * Created by xuexing on 16-12-30.
 */
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


var url = "/crawlers/ports/TaskInstance/taskInstanceOrder?limit=";
url += 8; //展示6条
CSG.common.tool.ajax.get(url,"",function (data) {
   console.log(data);
   var ths = "<thead><tr><th>任务名</th><th>链接地址</th><th>运行时间</th></tr></thead>",
       tbs = "<tbody>";
   $(data.dataAll).each(function () {
      tbs += `<tr><td>${this.data.jobName}</td><td><nobr style="width:100px;display: inline-block;overflow: hidden;text-overflow: ellipsis;">${this.data.targetUrl}</nobr></td><td>${dateNor(new Date( Number(this.starts) ))}</td></tr>`;
   });
   $("#instence").html(ths+tbs);
});
(function (d) {
    if(!window.localStorage.dataInformation){
        d = {};
        d.num = 10235085;
        d.date = (new Date()).getTime();
        window.localStorage.dataInformation = JSON.stringify(d);
    }else if(window.localStorage.dataInformation){
        console.log( window.localStorage.dataInformation);
        d = JSON.parse( window.localStorage.dataInformation );

        var n = d.num;
        var ned = parseInt(((new Date()).getTime() - d.date)/1000)*68
        console.log(ned);
        n += ned;
        setInterval(function () {
            n += parseInt( Math.random()*100);
            var str = n + "";
            var arr = [];
            for(var i=str.length-1,r=1;i>=0;i--,r++){
                //console.log(str);
                if(r%4){
                    arr.unshift(str[i])
                }else{
                    arr.unshift(",");
                    arr.unshift(str[i]);
                    r++;
                }
            }
            var fstr = arr.join("");
            $("#increasingData").html(fstr);
        },1000)
    }
}())
