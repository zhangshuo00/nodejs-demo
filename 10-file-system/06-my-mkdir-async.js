#!/usr/bin/node

const fs = require('fs'),
      dir = process.argv[2] || __dirname;
fs.mkdir(dir,function(err){
  if(err){
    console.error(err.message);
    process.exit(1);
  }
})
