"use strict";

const restaurant = {
    name: "Greg's Pizza Place",
    place: "3 Shepherds Way, Bournemouth",
    categories: ['Italian', 'Pasta', 'Vegetarian', 'Organic'],
    starterMenu: ['Flamingo', 'Bruschetta', 'Garlic Bread', 'Ceasar Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    }
};

// Destructuring is an ES6 Feature that is basically unpacking values from an array or an object into seperate variables, e.g.:

// How we would retrieve these items
const arr = [2,3,4]
const a = arr[0];
const a1 = arr[1];
const a2 = arr[2];
console.log(a, a1, a2)

// How we retrieve with ES6 Destructuring
const [x, y, z] = arr;
console.log(x, y, z)
console.log(arr) // NOTE: The original array is NOT affected, we're not destroying it, we're just destructuring it

let [main, secondary] = restaurant.categories;
console.log(main, secondary);

// const [first, ,third] = restaurant.categories; // here we choose the first and third element of the array, but leaving an empty gap with the commas between the two variables, this can be done how many times we want in order for us to destructure and "pick up" the specific value we want
//console.log(first, third)

// Now in oder to switch the two main and secondary variables we would have to use this:
// const temp = main;
// main = secondary;
// secondary = temp;

// console.log(main, secondary);


 //    ||
 //    ||
 //    ||
 //    ||
 //   \  /
 //    \/


// But now we can do this:
[main, secondary] = [secondary, main]
console.log(main, secondary);


// As we already know, we cannot return multiple values from functions, but what we can do is return an array of multiple values and then destructure it into separate variables, meaning that we can after-all return multiple values
console.log(restaurant.order(3, 0)) //this prints the succesfully returned array
const [starterItem, mainItem] = restaurant.order(3, 0)
console.log(starterItem + " and " + mainItem) // it returns both the values separated from the array from the function, and saved into variables


// FOR NESTED ARRAYS
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested; // simple destructuring (first layer destructuring)
// console.log(i, j);
const [i, , [j, k]] = nested; // using destructuring inside destructuring, aka nested destructuring
console.log(i, j, k);


// Default Values
// const [p, q, r] = [8,9];
// console.log(p, q, r); // r will be undefined

//instead we can do this
const [p=1, q=1, r=1] = [8,9] // by using the equal operator = we can declare default values for the variables, in case there isnt a value to be passed into one of them
console.log(p, q, r)