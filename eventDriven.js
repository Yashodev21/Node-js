// Write event-driven logging system using EventEmitter.

const EventEmitter = require("events");
class Logger extends EventEmitter {
    log(msg){
        this.emit("log", msg);
    }
}
const logger = new Logger();
logger.on("log", m => console.log("LOG:",m));
logger.log("Server started");