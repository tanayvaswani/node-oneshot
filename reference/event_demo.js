const EventEmitter = require('events');

// Create class 
class MyEmitter extends EventEmitter {}

// Init objects 
const myEmitter = new MyEmitter();

// Create an event listener
myEmitter.on('event', () => console.log('Event Fired!'));

// Init event 
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');



