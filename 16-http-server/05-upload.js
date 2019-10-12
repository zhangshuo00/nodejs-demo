#!/usr/bin/node
const http = require('http'),
      log = console.log;

http.createServer((req,res)=>{
  log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
  log(req.headers);

  log();
  req.pipe(process.stdout);
  
  var html = ''; 

  if(req.url === '/'){
    //200 ok
    res.writeHead(200,{'Content-Type':'text/html','Content-Length':Buffer.byteLength(html,'utf-8')});
    res.end(html);
  }else{
    //404 err
    res.statusCode = 404;
    res.setHeader('Content-Type','text/plain');

    res.end('error');
  }

  res.end('hello world');
}).listen(8080);
