/*
    - In this example I use the Rest operator which what it does is that when there is a big number
    of variables passed in to a function, by using "...<name>", an array is created with all the 
    variables that are passed when the function is called, and the array will have the name I give
    it after the three dots.

    ** For .reduce method, check reduce_method.js
*/

// 1st way:
const sum = (function() {
    return function(x , y, z) {
        const args = [x, y, z]
        return args.reduce((a, b) => a + b, 0)
    }
})()

console.log(sum(1,2,3))

 //    ||
 //    ||
 //    ||
 //    ||
 //   \  /
 //    \/

 // 2nd way (rest operator):
 const Rest_sum = (function() {
    return function(...args) {
        return args.reduce((a, b) => a + b, 0)
    }
 })()

 console.log(Rest_sum(1,2,3))