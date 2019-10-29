#!/usr/bin/node
const http = require('http'),
      log = console.log;
var total = 1;//server request times


http.createServer((req,res)=>{
  log(`${req.method} ${req.url} ${req.httpVersion}`);
  log(req.headers);
  log();
  
  log('i haved require %d times',total++);

  var count = 1;
  if(typeof req.headers.cookie !== 'undefined'){
    //parse cookie
    var data = req.headers.cookie.split('=');
    count = Number(data[1])+1;
  }


  res.statusCode = 200;
  res.setHeader('Set-cookie',`count=${count};max-age = 1000`);

  res.end(`You have visited ${count} times`);
}).listen(8080);
