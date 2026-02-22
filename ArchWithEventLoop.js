// Explain Node.js architecture with Event Loop phases.

// Architecture Components-->
// V8 Engine → executes JavaScript
// libuv → handles async operations
// Event Queue → stores callbacks
// Event Loop → executes tasks

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Event Loop Phases (Order)-->
// Timers → setTimeout, setInterval
// Pending Callbacks → I/O callbacks
// Idle/Prepare → internal use
// Poll → fetch new I/O events
// Check → setImmediate callbacks
// Close Callbacks → socket close events
// 👉 After each phase → microtasks are executed.

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------


console.log("Start");
setTimeout(() => console.log("Timer phase"), 0);
setImmediate(() => console.log("Check phase"));
process.nextTick(() => console.log("Microtask"));
console.log("End");