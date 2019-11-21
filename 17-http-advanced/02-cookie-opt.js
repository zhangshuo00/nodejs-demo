#!/usr/bin/node

const http = require('http');

http.createServer((req,res)=>{
    // console.log(`${req.method} ${req.url} ${req.httpVersion}`);
    // console.log();
    // console.log(req.headers);
    // console.log();

    console.log(req.headers['cookie']);
    console.log(req.headers['cookie'].split(';'));

    // 在响应头中封装cookie数据，把响应数据发送到客户端
    // 在开发者工具中查看和修改cookie信息
    res.setHeader('Set-cookie', ['name=zhangsan; Httponly', 'psd=123; max-age=1000']);
    res.end('have a good day!');
}).listen(8080);
