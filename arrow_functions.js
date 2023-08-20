var variable = function() {
    return "Hello"
}
 //    ||
 //    ||
 //    ||
 //    ||
 //   \  /
 //    \/

var arrowVariable = () => {
    return "Hello"
}

 //    ||
 //    ||
 //    ||
 //    ||
 //   \  /
 //    \/

 
const simpleVariable = () => "Hello";

/* ** Keep in mind that when you call these arrow function variables, even though
    they're actually variables and they don't take any parameters, we still need to call
    them with parenthesis like bellow.*/

console.log(variable(), arrowVariable(), simpleVariable())




/* -----------------------------------------------------------
                     W/ Parameters */
var concatenating = function (arr1, arr2) {
    return arr1.concat(arr2)
}

console.log(concatenating([1, 2], [3, 4, 5])) //this will print [1, 2, 3, 4, 5]

 //    ||
 //    ||
 //    ||
 //    ||
 //   \  /
 //    \/

const SimpleConcatenating = (arr1, arr2) => arr1.concat(arr2)

console.log(concatenating([0, 1], [2, 3, 4]))

