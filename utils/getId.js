var query = require('./../utils/query');
var post = require('./post');

//exports.getId = function getId(req, callback) {  //另一种写法
module.exports = function getId(req, callback) {
    if (req.method === 'GET') {
        //del?id=xxx
        var data = query(req);
        callback(data.id);
    } else {
        //异步
        post(req).then(function (data) {
            callback(data.id);
        })
    }
};

