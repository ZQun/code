'use strict';

var AbstractPager = require('./AbstractPager');

class AddPager extends AbstractPager {//子类实现抽象类的抽象方法

    constructor(errors,isLogined) {
        super(isLogined);//继承父类方法
        this.errors = errors || '';
    }

    _render() {//实现抽象方法把具体显示的内容返回去

        let time = Date.now();//时间

        let titleError = this.errors.title || '';
        let bodyError = this.errors.body || '';

        return `
            <form action="/login" method="post">
                <div>${this.errors}</div>
              <div class="form-group">
                <label for="loginname">登录名称</label>
                <input type="text" class="form-control" name="loginname" id="title" placeholder="登录名称">
              </div>
              <div class="form-group">
                <label for="password">登录密码</label>
                <input type="text" class="form-control" name="password" id="title" placeholder="登录密码">
              </div>
              <div class="form-group">
                <label for="password">验证码<img src="/vnum?${time}" /></label>
                <input type="text" class="form-control" name="vnum" id="vnum" placeholder="验证码">
              </div>
            
              <button type="submit" class="btn btn-default">登录</button>
            </form>
        `;
    }
}
module.exports = AddPager;//暴露模块接口
