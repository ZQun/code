'use strict';
var EditPager = require('../views/EditPager');
var database = require('../database');
var query = require('../utils/query');//解析url的
var post = require('../utils/post');
var indexAction = require('./index');
var loginAction = require('./login');

module.exports = function (req,res) {
    if(!req.session.isLogined) {
        loginAction(req, res);
        return;
    }
    //get - open updae pager
    // /update?id=xxx
    if (req.method === 'GET') {
        var id = query(req).id;
        var article = database.list[id];
        var errors = {};//默认情况下为空

        res.end(new EditPager(id, article, errors,req.session.isLogined).render());//渲染页面

    } else {
        //post - update with datebase
        //当点击更改按钮时为post
        post(req).then(data => {
            /* node4.1.1不支持此语法结构
            * let {id, title, body} = data;//数据解构
             database.update(id, {title, body});
            * */
            let id = data.id;
            delete data.id;
            database.update(id, data);

            //更新完毕需要返回首页
            indexAction(req, res);
        });
    }
};