#!/usr/bin/node

const msg = ['name','email','qq','mobile'];
var usr = {},i =0;

console.log(msg[0] + ': ');


process.stdin.on('data',(data)=>{
  usr[msg[i-1]] = data.slice(0,data.length -1).toString('utf-8');
  if(i === 4){
    console.log(usr);
    process.exit();
  }else{
    process.stdout.write(msg[i++]+':');
  }
});

process.stdin.on('end',()=>{
  console.log(usr);
})
