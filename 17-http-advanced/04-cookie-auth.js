      log = console.log;

http.createServer((req,res)=>{
  log(`${req.method} ${req.url} ${req.httpVersion}`);
  log(req.headers);
  log();
  
  if(typeof req.headers.cookie !== 'undefined'){
    //parse cookie
    var data = req.headers.cookie.split(';') ;
    log(data);
  }


  res.statusCode = 200;
  res.setHeader('Set-cookie',['name=zhangsan']);

  res.end('hello world');
}).listen(8080);
