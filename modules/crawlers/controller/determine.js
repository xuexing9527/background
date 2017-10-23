/**
 * Created by xuexing on 16-12-13.
 */
/**
 * 此处链接加载预判定
 */

function determine(url,res,contentType,statusError,refererUrlArr,i){
    // console.log(res);
    if (res.headers['content-type'] && res.headers['content-type'].indexOf('text/html') == -1) {  //contentType判断
        contentType.push('http响应状态  :   ' + res.statusCode + '; content-type   :   ' + res.headers['content-type'] + '; url   :   ' + url + '; referer来源' + refererUrlArr.join(',') + '     函数共执行了(Set的长度是)   :    ' + i + '次')
        return res.statusCode;//防循环加载,黑名单
    }
    if ((res.statusCode >= 400) && (res.statusCode <= 500)) { //异常状态
        statusError.push([res.statusCode, url, refererUrlArr])
        return res.statusCode;//防循环加载,黑名单
    }
}

module.exports = determine;
