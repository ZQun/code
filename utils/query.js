'use strict';
var qs = require('querystring');
var url = require('url');

module.exports = function query(req) {
        //del?id=xxx
        let query = url.parse(req.url).query;
        return qs.parse(query);//{id:'xxx'}
};
