'use strict';
var querystring = require('querystring');//对请求字符串进行解析,将其转化为json对象

module.exports = function (req) {
    //Promise代替回调函数
    return new Promise(function (resolve, reject) {
        let result = '';
        let jsonObj;
        //监听请求事件
        req.on('data', function (chuck) {
            result += chuck;
        });
        //接收end 结束事件 说明数据传导完毕
        req.on('end', function () {
            jsonObj = querystring.parse(result);
            //console.log(jsonObj);//打印{ title: '1', body: '2' }

            //成功时
            resolve(jsonObj);
        })
    })
};
