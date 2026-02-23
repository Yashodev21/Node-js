// Write refactored version using Promises.

const fs = require("fs").promises;

fs.readFile("a.txt","utf8")
.then(d=> fs.writeFile("b.txt",d))
.then(()=> fs.readFile("b.txt","utf8"))
.then(console.log)
.catch(console.error);