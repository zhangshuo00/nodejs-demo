#!/usr/bin/node
const http = require('http'),
      log = console.log;

http.createServer((req,res)=>{
     
    var html = `<!DOCTYPE html><html><head><title>Hello</title><head><body><h1>Hello world!</h1></body></html>`; 

    if(req.url === '/'){
      //200 ok
      res.writeHead(200,{
          'Content-Type' : 'text/html',
          'Content-Length' : Buffer.byteLength(html,'utf-8')
      });
      res.end(html);
    }else{
      //404 err
        res.statusCode = 404;
        res.setHeader('Content-Type','text/plain');

        res.end('Resource not found!');
    }

}).listen(8080);
