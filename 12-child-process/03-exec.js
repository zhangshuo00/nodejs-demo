#!/usr/bin/node

const cp = require('child_process');
var cmd = process.argv[2];

cp.exec(cmd,(err,stdout)=>{
  if(err) console.error(err.message);
  console.log(stdout);
})