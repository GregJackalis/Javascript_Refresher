/*
    - In this example the spread operator is used to copy the values of one array to another.

    - More specifically, the spread operator ([...array]) is used to create a shallow copy of an 
    array or to unpack the elements of an array into a new array or function call. It 
    essentially takes an existing array and spreads its elements into a new array or function 
    argument list. 

    ------------------------------------------------------------

    - The most important uses of it are:

    1) Creating a shallow copy of an array

    2) Unpacking array elements, that can also be passed into function instead of the whole array

    3) Converting NodeList to an Array

*/

/*      1st Example: Creating a shallow copy of an array
    ------------------------------------------------------------ */

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function () {
    arr2 = arr1
    arr1[0] = 'potato'
})()
console. log (arr2);

/* - In this case what is passed to arr2 is the whole arr1 meaning that when a change is happening
     to arr1, then arr2 won't have a copy of arr1, but actually will have what ever is arr1 even when it is changed */


 //    ||
 //    ||
 //    ||
 //    ||
 //   \  /
 //    \/


const arr1Spread = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2Spread;
(function () {
    arr2Spread = [...arr1Spread] //this is how the spread operator is defined
    arr1Spread[0] = 'potato'
})()
console. log (arr2);

 /* - Now in this case, in arr2Spread array only the values of the arr1Spread are saved, meaning 
      that even when changes happend on arr1Spread, arr2Spread will still have the original copy/values of arr1Spread */




      /*   2nd Example: Unpacking Array Elements/Passing them into functions
         --------------------------------------------------------------------- */

// Unpacking:
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const mergedArray = [...array1, ...array2];

console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]


//Passing elements into function:
function sum(a, b, c) {
    return a + b + c;
  }
  
const numbers = [1, 2, 3];
const result = sum(...numbers);
  
console.log(result); // Output: 6
  



/*              3rd Example: Converting NodeList to Array:
         -------------------------------------------------------- */
const nodeList = document.querySelectorAll('.item'); //e.g. this is a nodeList
const arrayFromNodeList = [...nodeList]; //by using the spread operator, we store the NodeList's values into an array, converting it to an array
         