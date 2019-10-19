#!/usr/bin/node
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

http.createServer((req,res)=>{
    // console.log(req.url);
    var pathname = url.parse(req.url).pathname;
    var pathnameArr = pathname.split('/');//将url中的pathname以/划分，返回数组

    switch(pathnameArr[1]){
        case 'listmanager':
            res.setHeader('content-type','text/html');
            fs.readFile(path.join(__dirname,'list.html'),(err,data)=>{
                if(err) console.log(err);
                res.end(data);
            });
            break;
        case 'detail':
            res.setHeader('content-type','text/html');
            fs.readFile(path.join(__dirname,'chapter.html'),(err,data)=>{
                if(err) console.log(err);
                res.end(data);
            });
            break;
        case 'login':
        case 'addChapter':
        case 'chapterList':
            res.setHeader('content-type','text/html');
            fs.readFile(path.join(__dirname,pathnameArr[1]+'.html'),(err,data)=>{
                if(err) console.log(err);
                res.end(data);
            });
            break;
        //images
        case 'images':
            var imgPath = '';
            var imgType = '';
            if(pathnameArr[2] === 'img'){
                imgPath = path.join(__dirname,'./images/img',pathnameArr[3]);
                imgType = pathnameArr[3].split('.');
                res.writeHead(200,{'content-type':'images/'+imgType});
                res.write(fs.readFileSync(imgPath));
                res.end();
            }else{
                //imgName = pa[2].split('.');//图片名的数组 [1-1,jpg]
                imgPath = path.join(__dirname,'./images',pathnameArr[2]);
                //fs.readFileSync(imgPath);
                imgType = pathnameArr[2].split('.')[1];
                res.writeHead(200,{'content-type':'image/'+imgType});
                res.write(fs.readFileSync(imgPath));
                res.end();

                // imgPath = './images/';
            }
            break;
        case 'js':
            var jsPath = path.join(__dirname,'./js',pathnameArr[2]);
            res.writeHead(200,{'content-type':'text/javascript'});
            res.write(fs.readFileSync(jsPath));
            res.end();
            break;
        case 'css':
            var cssPath = path.join(__dirname,'./css',pathnameArr[2]);
            res.writeHead(200,{'content-type':'text/css'});
            res.write(fs.readFileSync(cssPath));
            res.end();
            break;
        case 'json':
            var jsonPath = path.join(__dirname,'json',pathnameArr[2]);
            break;
        
    }
    
}).listen(8083);
