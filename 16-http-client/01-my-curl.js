#!/usr/bin/node

const http = addr = process.argv[2] || 'http://sample.wangding.in/web/one-div.html',
      url = require('url');

var protocol = url.parse(addr).protocol;
console.log(protocol);

const http = (protocol === 'http:') ? require('http') : require('https');

http.get(addr,function(res){
    console.log(`HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}`);

    console.log(res.headers);
    console.log('');
    res.pipe(process.stdout);
});
