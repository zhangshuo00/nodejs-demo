#!/usr/bin/node

// buffer 编码
// 从命令行参数获取登录网站的用户名和密码，
// 拼接成字符串并转化成base64编码
const log = console.log,
      usr = process.argv[2],
      pwd = process.argv[3];
if(process.argv.length !== 4){
  console.error('命令行格式：cmd username password');
  process.exit(1);
}

if(usr === undefined || pwd === undefined){
  console.error('请输入正确信息');
  process.exit(2);
}
log('usr: %s,pwd: %s',usr,pwd);

var buf =new Buffer( usr + ':' +pwd);

log('base64:%s',buf.toString('base64'));

