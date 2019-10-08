#!/usr/bin/node
const http = require("http"),
      log = console.log;

http.createServer((req,res)=>{
  log('request headers',req.headers);
  
  log('authorization',req.headers.authorization);

  var auth = req.headers.authorization;

  if(typeof auth !== 'undefined'){
    auth = auth.split(' ');
    if(auth[0] === 'Basic'){
      var buf = new Buffer(auth[1],'base64');

      log(buf.toString('utf-8'));
    }
  }

  log('user-agent',req.headers['user-agent']);
  res.end('hello world');
}).listen(8080);
