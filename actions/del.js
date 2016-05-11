'use strict';

var database = require('../database');
var getId = require('../utils/getId');
//var getId = require('./getId').getId; //一种用法
var indexAction = require('./index');
var loginAction = require('./login');

module.exports = function del(req, res) {
    if(!req.session.isLogined) {
        loginAction(req, res);
        return;
    }
    getId(req, id => {
        database.del(id);
        indexAction(req, res);//删除成功返回
    });
};