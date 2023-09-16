"use strict";

const restaurant = {
    name: "Greg's Pizza Place",
    place: "3 Shepherds Way, Bournemouth",
    categories: ['Italian', 'Pasta', 'Vegetarian', 'Organic'],
    starterMenu: ['Flamingo', 'Bruschetta', 'Garlic Bread', 'Ceasar Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
        thu: {
            open: 12,
            close: 22
        },
        fri: {
            open: 11,
            close: 23
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24
        }
    },

    orderPasta: function(ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with:\n ${ing1}, ${ing2} and ${ing3}`);
    }
};


const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// Before it'd be this:
for (let i = 0; i < menu.length; i++) console.log(menu[i]);

// With ES6:
for (const item of menu) console.log(item); 

// How this works?
// This command will still loop over the entire array, and on each iteration it will give us access to the current element of the array- which that element can be declared as a variable by us.  

// ** The continue and break keywords are still accessible in the for-of loops


// BUT, this for-of loop method was made so that the index part is "taken out" and only the current value is returned/given to us. So when it comes to getting an index with the for-of loop, it's a bit "of a pain"
for (const item of menu.entries()) {
    console.log(item);
    // console.log(`Position: ${item[0]}, Value: ${item[1]}`);
    const [index, value] = [...item];                   // DESTRUCTURING can be also used to easily declare variables for each element, instead of the line above
    console.log(`Position: ${index}, Value: ${value}`);
}


console.log([...menu.entries()]);
// - To show it better, in this case we used the spread operator to take out the values made with the .entries() method, and also placed them inside an array.
// - So what happens is that, inside that array there will be other arrays, inner arrays, where on which array there will be two elements- one element is going to be
//   the INDEX, and the second element will be the VALUE of the menu array.
// - So in order to get the index of each element from an array with a for-of loop, we will need to first use the .entries() method and from there an array of 2
//   elements will be assigned to the variable we made inside the condition- const item in this case.
// - Then from there, we need to return/access the first element of the now two-element-made array variable called item, in order to find the index of that value
//   inside the original menu array