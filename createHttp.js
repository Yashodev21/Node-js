// Node.js Code create HTTP Server

const http = require('http');

http.createServer((req,res) => {
    res.write('server running');
    res.end();
}).listen(3000);