#!/usr/bin/node

const http = require('http');
const qs = require('querystring');
var isLogin;

http.createServer((req,res)=>{
    var data = '';

    if(typeof req.headers['cookie'] === 'undefined'){
        isLogin = false;
    }else{
        var pair = req.headers['cookie'].split('=');
        isLogin = (pair[1] === 'true');
    }
    console.log(isLogin);

    if(req.method === 'POST' && req.url === '/login'){
        req.on('data',(chunk)=>{data += chunk;});
        req.on('end',()=>{
            var account = qs.parse(data);

            if(account.user === 'zhangsan' && account.password === '123'){
                console.log('user:%s,password: %s',account.user,account.password);
                isLogin = true;
                showHome(res);//登录成功后显示主页
            }else{
                showLogin(res);//登录失败显示登录页面
            }
        });
    }

    if(req.method === 'GET'){
        if(isLogin){//判断当前的状态是否为已登录
            if(req.url === '/logout') {
                isLogin = false;
                res.setHeader('Set-cookie',`login=${isLogin};max-age=600`);
                showLogin(res);//退出登录后，显示登录页面
            }else{
                showHome(res);//显示主页
            }
        }else{
            showLogin(res);//显示登录页
        }
    }
}).listen(8080);

//显示登录页面
function showLogin(res){
    var html = '<!DOCTYPE html>'
                +'<html>'
                +'  <head>'
                +'      <meta charset="utf-8">'
                +'      <title>登录</title>'
                +'  </head>'
                +'  <body>'
                +'      <form method="post" action="/login">'
                +'          <p>用户名：<input type="text" name="user"></p>'
                +'          <p>密码：<input type="password" name="password"></p>'
                +'          <p><input type="submit" value="登录"></p>'
                +'      </form>'
                +'  </body>'
                +'</html>';
    res.setHeader('Content-type','text/html');
    res.setHeader('Content-Length',Buffer.byteLength(html));

    res.statusCode = 200;
    res.end(html);
}
//显示主页
function showHome(res){
    // var html = '<!DOCTYPE html>'
    //             +'<html>'
    //             +'  <head>'
    //             +'      <meta charset="utf-8">'
    //             +'      <title>home</title>'
    //             +'  </head>'
    //             +'  <body>'
    //             +'      <h1>This is home page,you are login success!</h1>'
    //             +'      <a href="/logout">logout</a>'
    //             +'  </body>'
    //             +'</html>';
    res.setHeader('Content-Type','text/html');
    // res.setHeader('Content-Length',Buffer.byteLength(html));
    res.setHeader('Set-cookie',`login=${isLogin};max-age=600`);

    res.statusCode = 200;
    // res.end(html);
    res.end(`<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Home</title></head><body><h1>${user}你这是第 ${count} 次访问本网站！</h1></body></html>`)
}