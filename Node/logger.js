const EventEmitter = require('events');
//*Universally unique identifier
const uuid = require('uuid');

class Logger extends EventEmitter{
    log(msg) {
        this.emit('message', { id: uuid.v4(), msg} )
    }
}

//module.exports = Logger;

const Logger = require("./logger");

const logger = new Logger();

logger.on("message", (data) => console.log("Called listener", data));

logger.log("hello world");