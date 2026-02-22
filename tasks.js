// Explain microtask vs macrotask queue.

// Queue	            Examples	               Priority
// Microtask	Promise.then, process.nextTick	    Higher
// Macrotask	setTimeout, setInterval	             Lower

// Sync Code-->Microtasks-->Macrotasks

setTimeout(() => console.log("Macrotask"), 0);
Promise.resolve().then(() => console.log("Microtask"));
console.log("Sync");