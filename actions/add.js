'use strict';
var database = require('../database');
var AddPager = require('../views/AddPager');
var IndexPager = require('../views/indexPager');
var post = require('../utils/post');
var loginAction = require('./login');

module.exports = function (req, res) {

    if(!req.session.isLogined) {
        loginAction(req, res);
        return;
    }

    if (req.method === 'GET') {//如果请求方式为get
        res.end(new AddPager().render());
    } else {
        //then异步加载
        post(req).then(function (data) {
            console.log(data);
            var errors = {};
            if (!(data.title && data.title.length >= 5)) {
                errors.title = 'title error';
            }
            if (!(data.body && data.body.length >= 5)) {
                errors.body = 'body error';
            }

            if (!(data.vnum === req.session.vnum)) {
                errors.body = '验证码错误';
            }

            if (Object.keys(errors).length) {
                res.end(new AddPager(errors,req.session.isLogined).render());
            } else {
                database.add(data);
                //如果数据添加成功 显示首页数据
                res.end(new IndexPager(database.list,req.session.isLogined).render());
            }
        });
    }
};