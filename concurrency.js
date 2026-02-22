// Explain Node.js concurrency model.

// single-threaded for JS execution
// multi-threaded internally for I/O


const fs = require("fs");
console.log("Start");
fs.readFile("test.txt", "utf8", (err, data) => {
  console.log("File read complete");
});
console.log("End");