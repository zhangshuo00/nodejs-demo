#!/usr/bin/node
const http = require('http'),
      log = console.log;

http.createServer((req,res)=>{
  log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
  log(req.headers);
  log();
 
  if(req.url !== '/upload'){
    show(res,errorPage);
    return;
  }

  var f1 = '';
  req.setEncoding('binary');

  req.on('data',(data)=>{
    f1 += data;
  });

  req.on('end',()=>{
    //parse f1
    //get file name
    log(f1.split('\r\n')[1]);
    log(new Buffer(f1.split('\r\n')[4]).toString('utf-8'));
  })
  if(req.url === '/'){
    //200 ok
    res.end("ok!");
  }

}).listen(8080);
