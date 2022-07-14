const EventEmitter = require('events');

//Create class
class MyEmmitter extends EventEmitter{ }

//Init Object 
const myEmmitter = new MyEmmitter();

// Event Listener 
myEmmitter.on('event', () => console.log('Event fired!'))

//Init event
myEmmitter.emit('event');