#!/usr/bin/node
const http = require('http'),
      log = console.log;

var items = ['hello','world'];

http.createServer((req,res)=>{
  log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);

  switch(req.method){
    case 'GET':
      select(req,res);
      break;

    case 'POST':
      insert(req,res);
      break;

    case 'PUT':
      update(req,res);
      break;

    case 'DELETE':
      remove(req,res);
      break;

    default:
      err(res);
  }
  res.end('hello world');
}).listen(8080);

function select(req,res){
  var data = JSON.stringify(item);
  res.setHeader('Content-Length',Buffer.byteLength(data));
  res.setHeader('Content-Type','text/plain;charset = "utf-8"');
  res.setHeader('')
  res.end(data);
}

function insert(req,res){
  var item = '';
  req.on('data',(data)=>{
    item += data;
  })
  req.on('end',()=>{
    if(typeof item !== 'undefined'){
      items.push(item);
      res.end('insert ok!');
    }else{
      res.end('insert error');
    }
  }); 
}
function update(req,res){
  //parse url get id
  //parse req get content
  //modify items , items[id] = new content
  
  res.end(req.method);

}
function remove(req,res){
  var id = req.url.slice(1,req.url.length);
  items.splice(id,1);
  
  
  res.end('delete ok！');
}
function err(res){
  res.end('something error');
}
