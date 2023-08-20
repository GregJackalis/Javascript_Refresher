/*
    - The first function is using a JavaScript programming construct called "IIFE".
    It stands for "Immediately Invoked Function Expression".
    This type of construct is used when we have to define a function and immediately execute it, 
    without "polluting" the global scope by defining variables that are only needed temporarily
    within functions

    - the value = 1 command is what's called a "Default parameter" and what's special about it is
    that it has a default value in case no value is passed to it through the call of the function
*/


const increment = (function () {
    return function increment(number, value = 1) {
    return number + value;
    }
})()

const increment2 = (function (number, value = 1) {
    return number + value;
})

console.log(increment(5, 2))
console.log(increment2(5, 2))
