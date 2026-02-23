// Write code handling HTTP POST request.

const http = require("http");

http.createServer((req,res)=>{
    if(req.method==="POST"){
        let body="";
        req.on("data",chunk=> body+=chunk);
        req.on("end",()=>{
            console.log(body);
            res.end("Received");
        });
    }
}).listen(3000);