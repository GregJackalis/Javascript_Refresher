const fs = require('fs')
const files = fs.readdirSync('./')

console.log(files) 

fs.readdir('$', function(err, files) {
    if (err) console.log("Error: " + err)
    else console.log("Result: " + files)
})

// remember to always use/prefer to use asynchronours methods so that there wont be any problem
// with use scalability and connection speed