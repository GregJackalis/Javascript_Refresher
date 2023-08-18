const { exit } = require('process');
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function randomRange (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

rl.question("Type in the minimum number of your range: ", function(answer) {
    var minimum = parseInt(answer)

    rl.question("Type in the maximum number of your range: ", function(answer2) {
        var maximum = parseInt(answer2)
        console.log("The random number between " + minimum + " and " + maximum + " is: " + randomRange(minimum, maximum))
        exit()
    });
})
