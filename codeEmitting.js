// Write code emitting and listening events.

const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("msg", m => console.log(m));
emitter.emit("msg","Event triggered!");