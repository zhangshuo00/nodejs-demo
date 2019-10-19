#!/usr/bin/node
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const mine = require('./js/mine').type;

http.createServer((req,res)=>{
    // console.log(req.url);
    var pathname = url.parse(req.url).pathname;
    var pathnameArr = pathname.split('/');//将url中的pathname以/划分，返回数组

    switch(pathnameArr[1]){
        case 'login':
        case 'list':
        case 'addChapter':
        case 'chapter':
        case 'chapterList':
            res.setHeader('content-type','text/html');
            fs.readFile(path.join(__dirname,pathnameArr[1]+'.html'),(err,data)=>{
                if(err) console.log(err);
                res.end(data);
            });
            break;
        
    }
    // if(req.url === '/login'){
    //     res.setHeader('Content-Type','text/html;charset=utf-8');
    //     fs.readFile(path.join(__dirname,'login.html'),(err,data)=>{
    //         if(err){console.log(err)}
    //         res.end(data);
    //     })
    // }
    
}).listen(8083);
