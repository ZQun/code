'use strict';

var AbstractPager = require('./AbstractPager');

class EditPager extends AbstractPager{//子类实现抽象类的抽象方法

    constructor(id,article,errors,isLogined){
        super(isLogined);//继承父类方法
        this.id = id;
        this.article = article;
        this.errors = errors;
    }

    _render(){//实现抽象方法把具体显示的内容返回去

        let time = Date.now();

        let titleError = this.errors.title || '';
        let bodyError = this.errors.body || '';
        let vnumError = this.errors.vnum || '';

        return `
            <form action="/update" method="post">
                <input type="hidden" name="id" value="${this.id}" />
              <div class="form-group">
                <label for="title">标题</label>
                <input type="title" value="${this.article.title}" class="form-control" name="title" id="exampleInputEmail1" placeholder="标题">
                <p>${titleError}</p>
              </div>
              <div class="form-group">
                <label for="body">内容</label>
                <textarea class="form-control" id="body" name="body" placeholder="内容">${this.article.body}</textarea>
                <p>${bodyError}</p>
              </div>
              <div class="form-group">
                <label for="password">验证码<img src="/vnum?${time}" /></label>
                <input type="text" class="form-control" name="vnum" id="vnum" placeholder="验证码">
                <p>${vnumError}</p>
              </div>
            
              <button type="submit" class="btn btn-default">修改</button>
            </form>
        `;
    }
}
module.exports = EditPager;//暴露模块接口
