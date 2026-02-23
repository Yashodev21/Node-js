// Write custom EventEmitter class.

class MyEmitter {
    constructor() {
        this.events = {};
    }
    on(event, listener) {
        this.events[event] = listener;
    }
    emit(event, data) {
        if (this.events[event]) this.events[event](data);
    }
}

const emitter = new MyEmitter();
emitter.on("greet", name => console.log("Hello", name));
emitter.emit("greet", "Yash");
