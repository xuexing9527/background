/**
 * Created by xuexing on 16-12-13.
 */

var MSG = require('./../service/msg');

function handel($,url,refererUrlArr,path,mySet) {
    var startUrl = url;
        (// 路径url处理
            function () {
                var arr = [];
                if (url[url.length - 1] == '/') {
                    return url;
                } else {
                    for (var i = 0; i <= url.length; i++) {
                        arr.unshift(url[i])
                    }
                    url = (url.slice(0, -arr.join('').indexOf('/')) == 'http:') ? url : (url.slice(0, -arr.join('').indexOf('/')));
                }
            }()
        )

        //a判定
        $('a').each(function () {
            var href = $(this).attr('href');
            href && !(href.match(/^#.*|\s|javascript.*/g)) && (
                    (href.match(/^((http|ftp|rtsp|mms)?:\/\/)[^\s]+/g)) ? ( // url
                        (!mySet.has(href)) && (href.indexOf('www.amg-china.com') !== -1) &&
                        (
                            function () {
                                mySet.add(href);
                                var c_referUrlArr = refererUrlArr.slice(0);
                                c_referUrlArr.push(startUrl);
                                var msg = {url: url + href, referUrlArr: c_referUrlArr, path: path};
                                var sendMQMsg = new MSG(msg);
                                sendMQMsg.run();
                            }()
                        )
                    ) : (//路径处理
                        href.indexOf('www.') == -1 && (!href.match(/^((https|http|ftp|rtsp|mms)?:\/\/)[^\s]+/g)) && (
                            (href[0] != '/' && (!mySet.has(url + href))) ? (
                                function () {
                                    mySet.add(url + href);
                                    var c_referUrlArr = refererUrlArr.slice(0);
                                    c_referUrlArr.push(startUrl);
                                    var msg = {url: url + href, referUrlArr: c_referUrlArr, path: path};
                                    var sendMQMsg = new MSG(msg);
                                    sendMQMsg.run();
                                }()
                            ) : ''
                        )
                    )
            );
        });
    }

module.exports = handel;
