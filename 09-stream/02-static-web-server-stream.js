#!/usr/bin/node
const http = require("http"),
      fs = require('fs'),
      log = console.log;

http.createServer((req,res)=>{
    log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
    log(req.headers);
    log('');
    
    if(req.url ==='/favicon.ico')return;
    var fileName = __dirname + req.url;
    console.log(fileName);
    fs.createReadStream(fileName).pipe(res);
}).listen(8080);
