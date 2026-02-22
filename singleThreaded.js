// Analyze advantages of single-threaded model.

// No thread synchronization issues
// No deadlocks
// Less memory usage
// Faster context switching
// High performance for I/O-heavy apps

console.log("Start");
setTimeout(() => console.log("Async Task"), 2000);
console.log("End");