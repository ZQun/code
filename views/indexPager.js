'use strict';

var AbstractPager = require('./AbstractPager');

class IndexPager extends AbstractPager{//子类实现抽象类的抽象方法

    constructor(articleList,isLogined){
        super(isLogined);//继承父类方法
        this.list = articleList;
    }

    _render(){//实现抽象方法把具体显示的内容返回去

        //map() 方法返回一个由原数组中的每个元素调用一个指定方法后的返回值组成的新数组。
        //array.map(callback[, thisArg])
        //map将数据循环
        var listDOMString = this.list.map((article,index) => `
            <li class="list-group-item">
                <h3>${article.title}</h3>
                <p>${article.body}</p>
                <div style="${this.isLogined ? '' : 'display:none;'}">
                    <a href="/del?id=${index}"> DEL </a>
                    <a href="/update?id=${index}"> UPDATE </a>
                </div>
            </li>
        `).join('');//join将数组合并在一起

        return `
            <ul class="list-group">
                ${listDOMString}
            </ul>
        `;
    }
}
module.exports = IndexPager;//暴露模块接口
