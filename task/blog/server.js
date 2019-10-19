#!/usr/bin/node
const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req,res)=>{
    console.log(req.url);
    res.setHeader('Content-Type','text/html;charset=utf-8');
    if(req.url === '/login'){
        fs.readFile(path.join(__dirname,'login.html'),(err,data)=>{
            if(err){console.log(err)}
            res.end(data);
        })
    }

    // req.on('data',(data)=>{

    // })
    // req.on('end',()=>{
    //     res.writeHead(200,{
    //         'Content-Type':'text/plain',
    //         'Access-Control-Allow-Origin':'*'
    //     })
    // })
}).listen(8083);
