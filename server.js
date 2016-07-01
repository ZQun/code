'use strict';
var http = require('http');
var url = require('url');
var actionRepos = {};
var session = require('./session');//每次请求调用一次

actionRepos['/'] = require('./actions/index');
actionRepos['/add'] = require('./actions/add');//开启add路由 添加文章功能
actionRepos['/del'] = require('./actions/del');//删除文章功能
actionRepos['/update'] = require('./actions/update');//更新文章
actionRepos['/login'] = require('./actions/login');//登录
actionRepos['/logout'] = require('./actions/logout');//退出
actionRepos['/vnum'] = require('./actions/vnum');//验证码

// handleRepos['/update'] = require('./actions/update');
http.createServer(function (request, response) {
    request.session = session(request, response);//每次请求调用一次
    response.writeHead('Content-Type','text/html');
    let pathname = url.parse(request.url).pathname;
    let action = actionRepos[pathname];
    if (action) {
        action(request, response);
    }else {
        //response.writeHead(404);
        response.statusCode = 404;//修复bug
        response.end();
        //console.log('ok');
    }
}).listen(3000);
