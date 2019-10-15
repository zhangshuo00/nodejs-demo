#!/usr/bin/node

const http = require('http'),
      log = console.log;
http.createServer((req,res)=>{
    log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
    log(req.headers);
    log('');

    log('Host:',req.headers.host);
    log('User-Agent:',req.headers['user-agent']);
    log('Content-Type:',req.headers['content-type']);
    log('');

    req.pipe(process.stdout);
    res.end('ok!');
}).listen(8080);
