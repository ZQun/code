'use strict';

class AbstractPager{//抽象类
    constructor(isLogined){
        this.isLogined = isLogined;  //采用global相当于浏览器环境下对window  全局的意思
    }

    _render(){
        throw new Error('子类必须实现');
    }

    render(){//基类
        //基础模版
        return `
        <!DOCTYPE html>
        <html>
        <head>
        <meta charset='utf-8' />
        <link rel='stylesheet' href='//cdn.bootcss.com/bootstrap/4.0.0-alpha.2/css/bootstrap.min.css' />
        </head>
        
        <body class='container'>
            <div class='jumbotron'>
                <h1>Node.js Blog Demo</h1>
            </div>
        
            <div>
                <a href="/login" style="${this.isLogined ? 'display:none;' : ''}" class="btn btn-success">登录</a>
                <a href="/logout" style="${this.isLogined ? '' : 'display:none;'}" class="btn btn-success">退出</a>
                <a href="/add" style="${this.isLogined ? '' : 'display:none;'}" class="btn btn-success">添加</a>
            </div>
            
            ${this._render()}
        </body>
        </html>`;
    }
}

module.exports = AbstractPager;
