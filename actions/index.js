var IndexPager = require('../views/indexPager');
var database = require('../database');

module.exports = function (req, res) {
    //database.list读取数据库信息
    res.end(new IndexPager(database.list,req.session.isLogined).render());

};