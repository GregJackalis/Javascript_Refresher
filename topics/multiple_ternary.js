const { exit } = require('process');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function multipleTernaryOperators(number) {
    return number > 0 ? "positive" : number < 0 ? "negative" : "zero"
}

rl.question("Type in a number: ", function(answer) {
    console.log(multipleTernaryOperators(answer))
    exit()
})
