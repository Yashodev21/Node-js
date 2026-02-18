// Write code to emit custom event.

const EventEmitter = require('events');
const e = new EventEmitter();

e.on('greet', name => console.log("Hello "+name));
e.emit('greet',"Yash");
