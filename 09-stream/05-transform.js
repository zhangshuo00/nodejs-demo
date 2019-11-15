#!/user/bin/node

const Transform = require('stream').Transform,
        stdin = process.stdin,
        stdout = process.stdout;
stdin.setEncoding('utf-8');

// 实例化transform
var trans = new Transform();

trans._transform = (chunk, encoding, callback)=>{
    this.push(Buffer(chunk.toString('utf-8').toUpperCase()));
    callback();
}

stdin.pipe(trans).pipe(stdout);