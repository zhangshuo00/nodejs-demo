#!/usr/bin/node

const http = require('http');

http.createServer((req,res)=>{
    // console.log(`${req.method} ${req.url} ${req.httpVersion}`);
    // console.log();
    // console.log(req.headers);
    // console.log();

    console.log(req.headers['cookie']);
    console.log(req.headers['cookie'].split(';'));

    res.setHeader('Set-cookie', ['name=zhangsan; Httponly', 'psd=123; max-age=1000']);
    res.end('have a good day!');
}).listen(8080);
