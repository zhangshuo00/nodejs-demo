#!/usr/bin/node
const http = require("http"),
      fs = require('fs');
var buf = {};

http.createServer((req,res)=>{
  if(req.url ==='/favicon.ico')return;

  var fileName = __dirname + req.url;
  console.log(fileName);
  if(fs.existsSync(fileName)) return;

  if(!buf[fileName]){// 请求的url文件不再内存缓存中
    console.log('read file');
    // 读取文件存入缓存
    buf[fileName] = fs.readFileSync(fileName);
  }
  // 将缓存中的文件内容发送给浏览器
  res.end(fs.readFileSync(fileName));
}).listen(8000);
