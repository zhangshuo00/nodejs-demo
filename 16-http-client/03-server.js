#!/usr/bin/node

const http = require('http'),
      addr = 'http://localhost:8080/';

var option = url.parse(addr);
option.method = 'POST';

console.log()
http.request(addr,function(res){
  console.log(`HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}`);
  console.log(res.headers);
})
