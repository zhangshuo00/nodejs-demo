#!/usr/bin/node
const http = require('http'),
      url = require('url'),
      qs = require('querystring'),
      log = console.log;

http.createServer((req,res)=>{
  log('request URL:',req.url);

  //var addr = url.parse(req.url);
  var addr = url.parse('https://wangding:1234@www.baidu.com:8000/a/b/c?age=12&color=red#/def/efds');

  log('protocol:',addr.protocol);
  log('auth:',addr.auth);
  log('username:',addr.username);
  log('password:',addr.password);
  log('host name: ',addr.hostname);
  log('host: ',addr.host);
  log('search:',addr.search);
  log('hash :',addr.hash)

  log('path-name:',addr.pathname);
  log('path parse:',addr.pathname.split('/'));
  log('query string:',addr.query);
  log('qs parse:',qs.parse(addr.query));

  res.end('ok!');
}).listen(8080);
