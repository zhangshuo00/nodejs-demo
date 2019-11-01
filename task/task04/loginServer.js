const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer((req,res)=>{
    if(req.url === '/login'){
        res.setHeader('content-type','text/html');
        fs.readFile('./login.html',(err,data)=>{
            if(err) console.log(err);
            res.end(data);
        });
        
    }else{
        
    }

}).listen(8081);
