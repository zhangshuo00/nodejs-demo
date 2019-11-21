#!/usr/bin/node

const server = require('http').createServer(),//引入http模块
        assert = require('assert'),
        log = console.log;


server.on('request',(req,res)=>{
    log(`${req.method} ${req.url} HTTP/${req.httpVersion}`)
    log(req.headers);
    log('');

    switch(req.url){// 判断发起的请求
        case '/':
            sendNormal(res);
            break;
        case '/admin':
            sendSecretMsg(req,res);
            break;
        default:
            sendErrorMsg(res);
    }
});
server.listen(8080);

function userNamePasswd(str){
    var msg = str.split(' ');
    // assert.equal(val1,val2,msg) 判断两个值是否相等，不相等返回msg
    assert.equal(msg.length,2,'must to be 2');
    assert.equal(msg[0],'Basic','must to be Basic');

    var account = Buffer.from(msg[1],'base64');
    msg = account.toString('utf-8').split(':');

    return{
        userName:msg[0],
        passWord:msg[1]
    };
}

function sendNormal(res){
    res.end('good day');
}

function sendSecretMsg(req,res){
    if(req.headers.authorization){// 请求头中包含的基本验证信息
        var usr = userNamePasswd(req.headers.authorization);
        console.log('\nauth: ',usr);

        if(usr.userName === 'zhangsan' && usr.passWord === '123'){
            res.end('this is a secret');
            return;
        }
    }
    res.writeHead(401,{'WWW-Authenticate':'Basic'});
    res.end('who are you');
}

function sendErrorMsg(res){
    res.statusCode = 404;
    res.end('404 error');
}