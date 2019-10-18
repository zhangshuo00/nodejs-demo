#!/usr/bin/node
const http = require('http');

http.createServer((req,res)=>{
    var html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    <body>
        <div>
            <h1>hello,world</h1>
        </div>
    </body>
    </html>`
    res.setHeader('Content-Type','text/plain');
    res.end(html);
}).listen(8080);

