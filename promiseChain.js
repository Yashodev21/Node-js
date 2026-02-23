// Write Promise chaining example.

Promise.resolve(5)
.then(n => n * 2)
.then(n => n + 3)
.then(console.log);