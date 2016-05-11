'use strict';

var qs = require('querystring');
var cache = {};//缓存空间
var sid = 0;

module.exports = function (req, res) {
    var cookie = req.headers.cookie;
    var cookieJSONObj = {};
    //xxxxx;xxxx  判断cookie是否存在
    if(cookie) {
        //对cookie进行分段为数组形式  用&对cookie进行链接  qs.parse进行解析
        cookieJSONObj = qs.parse(cookie.split(';').join('&'));
    }

    if(cookieJSONObj.sid && cache[cookieJSONObj.sid]) {
        return cache[cookieJSONObj.sid];
    } else {
        sid += 1;
        res.setHeader('Set-Cookie', [`sid=${sid}`]);
        return cache[sid] = {};
    }
};