var indexAction = require('./index');

module.exports = function (req,res) {
    req.session.isLogined = false;
    indexAction(req, res);
};