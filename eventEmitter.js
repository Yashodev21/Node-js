// Write code using EventEmitter

const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('msg', ()=> console.log("Event triggered"));
emitter.emit('msg');
