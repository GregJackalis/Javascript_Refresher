/*
    - In this example we see that by using the const keyword we make a global variable that is
    read-only. Thus why we cannot make any changes/update lithe array like the one in line 15

    - Instead we can use a more "specific" way of changing the values and that's by referring
    to the exact position of the array, just like in lines 17, 18, 19
*/


const array = [3 , 8 , 9]

function edit() {
    "use strict";

   // array = [5, 0, 2] , not working wuth const array variable

    array[0] = 5
    array[1] = 0
    array[2] = 2

    console.log(array)
}

console.log("\nBefore: " + JSON.stringify(array))
console.log("\nAfter: ")
edit()