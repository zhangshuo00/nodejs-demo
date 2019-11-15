#!/usr/bin/node

const stdin = process.stdin,
      stdout = process.stdout;

stdin.setEncoding('utf-8');

// 将标准输入流的数据写到标准输出流中
stdin.on('data',(data)=>{
  stdout.write(data);
});

// 在标准输入流push字符串
stdin.push('hello world');
stdin.pipe(stdout);//通过 pipe方法连接

// 在标准输出流上输出 26个字母
for(var c = 'a'.charCodeAt(0);c<='z'.charCodeAt(0);c++){
  stdout.write(String.fromCharCode(c));
}

stdout.write('\n');
