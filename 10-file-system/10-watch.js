#!/usr/bin/node

const fs = require('fs'),
      dst = process.argv[2];
// fs.watch(dst,function(evt,file){
//   console.log("%sevt happend with file:%s",evt,file);
// })
var w = fs.watch(__dirname,console.log);
process.on('SIGINT',()=>{
  w.close();
  console.log('unwatch the directory');
  
  setTimeout(() => {
    process.exit();
  }, 5000);
});