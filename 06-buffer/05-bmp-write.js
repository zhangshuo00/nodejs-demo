#!/usr/bin/node

const log = console.log,
      fs = require('fs'),
      width = 16,
      height =16;
var arg = process.argv.splice(2);

var pixelByteSize = width * height * 4,
    totalSize = pixelByteSize + 54;

var buf = new Buffer(totalSize);
buf.fill(0);

//
buf.write('BM');
buf.writeUInt32LE(totalSize,0x02);
buf.writeUInt32LE(54,0x0a);
buf.writeUInt32LE(40,0x0e);
buf.writeUInt16LE(1,0x1a);
buf.writeUInt16LE(32,0x1c);
buf.writeUInt32LE(pixelByteSize,0x22);
buf.writeInt32LE(width,0x12);
buf.writeInt32LE(height,0x16);

//
for(var i =54;i<totalSize;i+=4){
  buf.writeUInt32LE(0xff0000ff,i);
}

fs.writeFile('./'+arg,buf,(err)=>{
  if(err != null){
    console.error(err);
    process.exit(1);
  }
})
