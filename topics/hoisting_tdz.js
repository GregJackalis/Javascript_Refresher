"use strict";
window

// console.log(me); // it can be hoisted and it woks, it just works as undefined
// console.log(job); // the job vaiable in this egion of code is inside the tdz (fom the beginning of the global scope until the line the job variable is defined)
// console.log(year); // we get the same erro, its the same case as the above variable

var me = 'Greg';
let job = 'student';
const year = 2003;


//Functions
// console.log(addDecl(2,3)); // the regula function is hoisted (just like the var variables) so it prints undefined
//console.log(addExpr(2,3)); // even though this is a function, it is stored inside a const variable, therefore i CANNOT be hoisted. 
// console.log(addArrow(2,3)); // the same works with arrow functions, notice how these lines here are befoe the functions' declarations, meaning that these commands right here are inside the tdz of each function

/*
    - If we try to use the var variable for the const function and the arrow function, 
    we get this error:
    Uncaught TypeError: addArrow is not a function

    - This happens because, when a variable is of type var, it has the value "undefined". So then at 
    the console.log() commands, we are basically trying to pass arguments at an undefined value. 
    That's why we get the error that they are not functions.

    **It's like writing this: undefined(2,3)
    And we can always check the functions value by simply typing:
    console.log(addExpr), and it will return "undefined"
    
 */

function addDecl(a,b) {
    return a+b;
}

const addExpr = function(a,b) {
    return a+b;
}

const addArrow = (a,b) => a+b;


// Example

// Why we shouldn never use the var variable
if(!numProducts) deleteShoppingCart(); // here we checl if numProducts is 0, undefined or null. and just because it is declared later, its value is undefined, meaning that the wron gmessage will be print even though numProduct = 10
console.log(numProducts)
var numProducts = 10;

function deleteShoppingCart() {
    console.log('All products deleted!');
}

// Example 2
var x = 1; // a property is made inside the "window" object
let y = 2; // let and const variables, do NOT create properties on the "window" object
const z = 3;

// testing (for some reason the window object is not defined but the results are next to the commands)
console.log(x === window.x); // true
console.log(y === window.y); // false
console.log(z === window.z); // false