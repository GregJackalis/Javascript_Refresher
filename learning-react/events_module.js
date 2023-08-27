// an event is an "indicator" that something has happened
const EventEmitter = require('events') // the first letter is capital because it indicates that it's a class (container for properties and functions, aka methods)

const emitter = new EventEmitter() //this is an object based on the EventEmitter class

// a listener is called when an event is raised
emitter.on('messageLogged', (arg) => {  // e or eventArg is used also as the name of the variable passed being an event
    console.log("User has successfully logged in. Listener called through this. ", arg)
}) // we can also use the emitter.AddListener method, both .AddListener and .on do the same exact thing


// Raise an Event
emitter.emit('messageLogged', {
    id: 1,
    url: 'url'
}) // this is used to raise an event, signalling an event has happened (emit = making a noise, produce smth)
// we can pass a few things as arguments inside in events, but it is prefferable to create an object that has the properties we need

/*
                                            BE CAREFUL
                                        -----------------
        - Adding a listener after raising an event will not cause the listener to be triggered for that past event.
        - Listeners need to be added before the event is emitted to be effective for that specific event.
        - Listeners added before an event is emitted will respond to subsequent emissions of that event.
*/



// Raise: logging (data : message) (exercise)
//first we need to make an event listener

emitter.on('loggingUser', (eventArg) => {
    console.log(`Logging in user with id ${eventArg.id} and name ${eventArg.name}`)
})

emitter.emit('loggingUser', {
    id: 34,
    name: "Jackalis",
    created_at: "11:00 pm"
})