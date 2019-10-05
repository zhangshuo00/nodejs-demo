#!/usr/bin/node

const fs = require('fs'),
      dir = __dirname;

fs.stat(dir,function(err,stats){
  if(err){
    return console.error(err);
  }
  console.log(stats);
  console.log(stats.size);
})
