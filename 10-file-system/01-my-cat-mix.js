#!/usr/bin/node

const fs = require('fs'),
      file = process.argv[2] || __filename;
try{
  
const fid = fs.openSync(file,'r');

console.log(fs.readFileSync(fid).toString('utf-8'));

fs.closeSync(fid);
}
catch(e){
  
}
