#!/usr/bin/node
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

http.createServer((req,res)=>{
    // console.log(req.url);
    var pathname = url.parse(req.url).pathname;
    var pathnameArr = pathname.split('/');//将url中的pathname以/划分，返回数组
    console.log(pathnameArr)

    switch(pathnameArr[1]){
        case 'listmanager':
            res.setHeader('content-type','text/html');
            fs.readFile(path.join(__dirname,'list.html'),(err,data)=>{
                if(err) console.log(err);
                res.end(data);
            });
            break;
        case 'list':
            res.setHeader('content-type','text/html');
            fs.readFile(path.join(__dirname,'chapterList.html'),(err,data)=>{
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
            // console.log('a')
            break;
        case 'login':
        case 'addChapter':
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
            }
            break;
        case 'js':
            var jsPath = path.join(__dirname,'./js',pathnameArr[2]);
            res.writeHead(200,{'content-type':'text/javascript'});
            res.write(fs.readFileSync(jsPath));
            res.end();
            break;
        case 'css':
            let cssPath = path.join(__dirname,'./css',pathnameArr[2]);
            res.writeHead(200,{'content-type':'text/css'});
            res.write(fs.readFileSync(cssPath));
            res.end();
            break;
        case 'json':
            res.writeHead(200,{'content-type':'text/json;charset=utf-8'});
            fs.readFile(path.join(__dirname,'./json',pathnameArr[2]+'.json'),(err,data)=>{
                if(err) console.log(err);
                res.end(data);
            });
            // console.log('b')
            break;
        case 'getList':
            res.writeHead(200,{'content-type':'text/json'});
            res.write(fs.readFileSync(path.join(__dirname,'/json/list.json')));
            res.end();
            break;
        case 'add':
            var a = decodeURI(req.url).split('?')[1].split('&');
            var title = a[0].split('=')[1];//当前输入的title
            var content = a[1].split('=')[1];//当前输入的文章内容
            // console.log(decodeURI(req.url))
            var originalList = JSON.parse(fs.readFileSync(__dirname + '/json/list.json'));
            var newList = new Object();
            newList.title = title;
            newList.content = content;
            originalList.push(newList);
            fs.writeFileSync(__dirname+'/json/list.json',JSON.stringify(originalList))
            // console.log(JSON.parse(fs.readFileSync(__dirname + '/json/list.json')))//list.json数组形式
            res.end();
            break;
        default:
            res.end();
            break;
    }
    
}).listen(8083);
