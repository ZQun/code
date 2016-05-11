var fs = require('fs');
const filepath = __dirname + '/data.json';//__dirname表示当前程序的目录
var list;

try {
    list = JSON.parse(fs.readFileSync(filepath));//数据初始化启动读取json数据
}catch(e){
    list = [];
}

module.exports = {
    add(article){//增
        list.push(article);//添加数据
        this.store();//数据持久化
    },
    del(index){//删
        list.splice(index, 1);//删除数据,index删除位置
        this.store();//数据持久化
    },
    update(index,newArticle){//改
        list.splice(index, 1, newArticle);//更改数据index位置,newarticle新的数据
        this.store();//数据持久化
    },
    get list(){//查
        return list;
    },
    store(callback){//持久化,将数据存储在硬盘上
        callback = callback || function(){};
        //JSON.stringify对数据进行字符串化
        fs.writeFile(filepath, JSON.stringify(list), callback);
    }
};