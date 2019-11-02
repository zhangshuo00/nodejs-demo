#!/usr/bin/node

const http = require('http');
const qs = require('querystring');
const fs = require('fs');

http.createServer((req,res)=>{
    var data = '';
    if(req.url === '/login'){
        showLogin(res);
        req.on('data',(chunk)=>{data += chunk;});
        req.on('end',()=>{
            var account = qs.parse(data);
            if(account.username === 'zhangsan' && account.pwd === '123'){//登录成功，显示cookie信息
                showCookie(account.username,req,res);
            }else{//验证失败，重新显示登录界面
                showLogin(res);
            }
        })
    }

}).listen(8081);

//显示登录页面
function showLogin(res){
    res.setHeader('Content-Type','text/html');
    res.statusCode = 200;
    //读取登录的html文件
    fs.readFile('./login.html',(err,data)=>{
        if(err) console.log(err);
        res.end(data);
    });
}
//登录成功后显示cookie信息页面
function showCookie(user,req,res){
    var count = 1;
    if(typeof req.headers['cookie'] === 'undefined'){
        count = 1;
    }else{
        var pair = req.headers['cookie'].split('=');
        count = Number(pair[1])+1;
        // console.log(count);
    }
    res.setHeader('Set-cookie',`logincount=${count};max-age=100000`);
    // console.log(count);
    res.end(`<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Home</title></head><body><h1>${user} 登录成功，这是你第${count}次登录！</h1></body></html>`);
}