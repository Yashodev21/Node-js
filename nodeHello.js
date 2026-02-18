// Write Node.js server respondig "Hello".

require('http')
.createServer((req,res)=>{
  res.end("Hello");
})
.listen(3000);