// Explain how Node.js handles file I/O efficiently.

// File request comes
// Task delegated to thread pool
// Thread processes file
// Result returned via callback
// Event loop executes callback


fs.readFile("file.txt", () => {
  console.log("Done");
});

console.log("Still running...");