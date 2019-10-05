#!/usr/bin/node

const fs = require('fs'),
      args = process.argv[2],
      dir = __dirname;

var file1 = new Object();

switch(args){
  case 'ls':
    fs.readdir(dir,function(err,files){
      if(err){
        console.error(err);
      }
      console.log(files[0]);
    })
    break;

  case 'mkdir':
    break;

  default:
    break;
}
