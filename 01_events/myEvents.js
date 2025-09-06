const EventEmitter = require('node:events');

const eventEmitter = new EventEmitter();

eventEmitter.on("greet", (name) => {
    console.log(`Hi, ${name} you have called the greet event`);
        // eventEmitter.emit("Namaste")
})

eventEmitter.on("greet", (name) => {
    console.log(`Hi, ${name} you have called the greet event second time`);
        // eventEmitter.emit("Namaste")
})

eventEmitter.on("Namaste", () => {
    console.log("Hi, Shlok you have called the Namaste event");
})

eventEmitter.once("Notify", (user) => {
    console.log(`Hi, ${user} Just so you know I can only be called once`);
})

// eventEmitter.emit("greet", "shlok")
// eventEmitter.emit("Namaste")

this.emit("Namaste")

const myListener = () => console.log("I am myListener event");
eventEmitter.on("test", myListener)

eventEmitter.emit("test")
eventEmitter.removeListener("test", myListener)
eventEmitter.emit("test")

console.log(eventEmitter.listenerCount("greet"));
