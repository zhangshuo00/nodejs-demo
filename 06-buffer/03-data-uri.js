#!/usr/bin/node

// 从命令行参数获取图片文件名
// 把图片数据生成 data URI格式的数据
// 将 data URI嵌入到html页面，通过http服务监听8080端口
// 在浏览器得到页面
const fs = require('fs'),
      log = console.log,
      http = require('http'),
      path = require('path'),
      file = process.argv[2];

if(process.argv.length !== 3){
  console.error('命令行参数格式：cmd fileName');
  process.exit(1);
}

try{
  var data = fs.readFileSync(file).toString('base64');
}catch(e){
  console.error(e.message);
  process.exit(2);
}

//log(data);
var ext = path.extname(file);//返回文件的扩展名
var uriData = 'data:image/' + ext.slice(1,ext.length)+';base64,'+data;

var html = ''
  + '<!DOCTYPE html>'
  + '<html lang="en">'
  + '<head>'
    + '<meta charset="UTF-8">'
    + '<title></title>'
  + '</head>'
  + '<body>'
    + '<img alt="'
    +path.basename(file,ext)
  +'"src="'+uriData+'"></body></html>';

http.createServer((req,res) => {
  log(req.headers);
  log(req.url + '\n');
  res.end(html);
}).listen(8080);

