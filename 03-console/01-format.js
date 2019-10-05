#!/usr/bin/node

const user = {
  name:'zhangshuo',
  age:21,
  qq:'443494891'
};

const log = console.log;

log('name:%s',user.name);
log('age:%d',user.age);
log('JSON:%j',user);

log('qq:%s',user.qq);
log('qq:',user.qq);
log('qq:' + user.qq);
log(`qq:${user.qq}`);//模板字符串输出

console.error('Error! something wrong!');
