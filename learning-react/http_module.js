const http = require('http')
// this class inherits from net.Server,and net.Server is an EventEmitter.
// thus why http has a lot of the same properties/functionalities as the EventEmitter

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write("Hello User!")
        res.end()
    }

    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2, 3]))
        res.end()
    }
}); 
// can use server.on, also have the .addListener and the .emit properties

/* server.on('connection', (socket) => {
    console.log("New Connection...")
    // this arrow function occurs when a user loads on their browser the url localhost:3000
}) */
server.listen(3000); // 3000 is the number of the port

console.log("Listening on port 3000....")
