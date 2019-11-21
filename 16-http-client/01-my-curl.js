#!/usr/bin/node
const http = require('http'),
      url = require('url');


var addr = process.argv[2] || 'http://sample.wangding.in/web/one-div.html';
// encodeURI() 将字符串作为URI进行编码
// decodeURI() 可以解码URI
// url.parse() 将一个URL字符串转换成对象并返回
var options = url.parse(global.encodeURI(addr));

options.headers = {
  'User-Agent' : '01-my-curl.js'
};

http.get(options,function(res){
    console.log(`HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}`);

    console.log(res.headers);
    console.log('');
    res.pipe(process.stdout);
});
