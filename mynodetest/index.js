//Simple http server

const http = require('node:http');

const server = http.createServer((req,res)=> {
    res.writeHead(200, {'Content-Type':"text/plain"});
    res.end("Hi, This is Sushil, Welcome to my World!");
});

const port = process.env.port || 3000
server.listen(3000,()=>{
    console.log("server listen on 3000 port.");
});
