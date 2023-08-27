const EventEmitter = require('events')

const Logger = require("./logger") // we require the class that we just made and exported on logger.js (keeping the capital)
const logger = new Logger(); // we make an object out of the Logger class we made

logger.on('messageLogged', (arg) => {  
    console.log("User has successfully logged in. Listener called through this. ", arg)
}) 

logger.myLog('Hello World')