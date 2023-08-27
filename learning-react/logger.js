const { log } = require("console")
const EventEmitter = require('events')
const emitter = new EventEmitter()

var url = 'http://mylogger.io/log'

//first letter ALWAYS capital for classes
class Logger extends EventEmitter {  // by using the extends keyboard, it means that the Logger class will have all the functionality is defined inside EventEmitter
    myLog(message) {
        console.log(message)

        this.emit('messageLogged', { // and here because we're using the class's functionalities, we use the keyword this.
            id: 1,
            url: 'http://'
        })
    }
}

module.exports = Logger; //remember to export the class so it can be successfully require on the app.js file