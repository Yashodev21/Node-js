// Write Node.js REST-style server (basic).

const http = require("http");

http.createServer((req,res)=>{
    if(req.url==="/users" && req.method==="GET"){
        res.end(JSON.stringify([{name:"Yash"}]));
    }
}).listen(3000);