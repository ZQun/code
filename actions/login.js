var LoginPager = require('../views/LoginPager');
var post = require('../utils/post');
var indexAction = require('./index');

module.exports = function (req,res) {

    if(req.method === 'GET') {
        res.end(new LoginPager().render());
    } else {
        post(req).then(data => {
            var loginname = data.loginname;
            var password = data.password;

            if(loginname && password && loginname === 'admin' && password === 'admin' && req.session.vnum === data.vnum) {//登录成功
                req.session.isLogined = true;
                indexAction(req, res);
            } else {//登录失败
                res.end(new LoginPager('登录失败,请重新登录').render());
            }
        })
    }
};