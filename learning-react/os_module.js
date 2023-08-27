const os = require('node:os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

// console.log("Total Memory: " + totalMemory)
// console.log("Free Memory: " + freeMemory)
 

//Template String
// ES6 : ECMAScript
console.log(`Total Memory: ${totalMemory}\nFree Memory: ${freeMemory}`)