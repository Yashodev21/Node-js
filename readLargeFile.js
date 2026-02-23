// Write code reading large file using streams.

const fs = require("fs");

const stream = fs.createReadStream("bigfile.txt","utf8");
stream.on("data", chunk => console.log(chunk));