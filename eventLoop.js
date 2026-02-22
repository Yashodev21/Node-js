// Explain internal working of Event Loop.

// Incoming Request -->
// Event Queue -->
// Event Loop checks queue --> 
// Executes callback if call stack empty

function task() {
  console.log("Executed when stack empty");
}
setTimeout(task, 0);
console.log("Sync finished");