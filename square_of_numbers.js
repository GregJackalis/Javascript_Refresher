const originalArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];


// 1st way:
const squearingArrays = (array) => {
    const squaredValues = [];
    for (const number in array) {
        if (array[number] >= 0) {
            squaredValues.push(array[number] * array[number])
        }
    }
    return squaredValues
}

console.log("1st way: " + squearingArrays(originalArray))


 //    ||
 //    ||
 //    ||
 //    ||
 //   \  /
 //    \/


 // 2nd way:
const less_complex_Squearing = (arr) => {
    const squaredValues = arr.filter(num => {
        return (Number.isInteger(num) && num > 0)
    }).map( x => {
         return x * x
    })
    return squaredValues
}

console.log("Less complex squearing: " + less_complex_Squearing(originalArray))


 //    ||
 //    ||
 //    ||
 //    ||
 //   \  /
 //    \/

/*
    - In this last example we create a const variable that is an arrow function, that inside that
    function we use the .filter commands and inside the command's argument we create another
    arrow function that checks whether the number inside the array is integer and positive

    - We also use the .map command and again by using an arrow function as the argument inside that command, we calculate the square of the value in the array and then return everything automatically. 
    This happens because we didn't use curly brackets to open the arrow functions. If we did use the curly brackets we would have to use the return keyword.
*/
const simpleSquearing = (arr) => arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x)

console.log("Simplest way: " + simpleSquearing(originalArray))