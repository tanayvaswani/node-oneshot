const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('error', () => {
  console.log("Done!");
});

myEmitter.emit('error');