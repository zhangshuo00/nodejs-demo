#!/usr/bin/node
const http = require("http"),
      cp = require('child_process');

console.log('i am father process. pid: ',process.pid);

http.createServer((req,res)=>{
  var child = cp.spawn('./02-child.js',[]);
  // 使用pipe管道将stdout连接到res
  child.stdout.pipe(res);
}).listen(8080);
