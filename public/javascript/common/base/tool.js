/**
 * Created by wangchaochao on 2016/11/17.
 * 对一些数据交互公共方法库
 */
;
! function() {
    //设置请求头
    function setHeaders(xhr) {
        //var _S = $.cookie('_S');
       // xhr.setRequestHeader("_S", _S);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader('Accept', 'application/json');
    }
    //公共方法库调用
    CSG.common.tool = {
        ajax: {
            get: function(url, JsonOdata, success, error) {
                JsonOdata = JSON.stringify(JsonOdata);
                $.ajax({
                    url: url,
                    data: JsonOdata,
                    type: 'get',
                    dataType: 'json',
                    success: function(res) {
                        success && success(res);
                    },
                    beforeSend: function(xhr) {
                        setHeaders(xhr);
                    },
                    error: function(err) {
                        error && error(err);
                    }
                });
            },
            post: function(url, JsonOdata, success, error) {
                JsonOdata = JSON.stringify(JsonOdata);
                $.ajax({
                    url: url,
                    data: JsonOdata,
                    type: 'post',
                    dataType: 'json',
                    success: function(res) {
                        success && success(res);
                    },
                    beforeSend: function(xhr) {
                        setHeaders(xhr);
                    },
                    error: function(err) {
                        error && error(err);
                    }
                });
            }
        }
    };
    //把时间戳转化为时间格式
    Date.prototype.format = function(format) {
        var date = {
            "M+": this.getMonth() + 1,
            "d+": this.getDate(),
            "h+": this.getHours(),
            "m+": this.getMinutes(),
            "s+": this.getSeconds(),
            "q+": Math.floor((this.getMonth() + 3) / 3),
            "S+": this.getMilliseconds()
        };
        if (/(y+)/i.test(format)) {
            format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
        }
        for (var k in date) {
            if (new RegExp("(" + k + ")").test(format)) {
                format = format.replace(RegExp.$1, RegExp.$1.length == 1
                    ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
            }
        }
        return format;
    };

    //数组去重
    Array.prototype.yinwu_unique=function(){
        var newarr=[];
        var obj={};
        for(var i=0;i<this.length;i++){
            if(!obj[this[i]]){
                newarr.push(this[i]);
                obj[this[i]]=1;
            }
        }
        return newarr;
    }

}();


