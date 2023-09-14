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

const rest1 = {
    name: 'La Scala',
    // numGuests: 34,
    numGuests: 0
};

const rest2 = {
    name: 'La pizza',
    owner: 'Gregorious'
};


// OR ASSIGNMENT OPERATOR
// we want to apply smth to all of them, similar to fetching data from api and wanting to add smth
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests = rest1.numGuests || 10;

// rest1.numGuests ||= 10; // the default value 10 is applied only if the value of the .numGuests property is falsy
// rest2.numGuests ||= 10; // and by falsy we mean: false, undefined, null, empt string '', the number 0, NaN, document.all etc


// NULLISH COALESCING OPERATOR (null or undefined)
rest1.numGuests ??= 10; // here the already given value which is 0 will be returned
rest2.numGuests ??= 10; // here because no property numGuests exist inside the rest2 object, one will be created with the value 10

console.log(rest1.numGuests);
console.log(rest2.numGuests); 


// AND ASSIGNMENT OPERATOR
// rest2.owner = rest2.owner && '<ANONYMOUS>' // short circuiting in and, returns the first falsy or the last truthy=if all falsy

// rest1.owner = rest1.owner && '<ANONYMOUS>'; //undefined is returned because a property is MADE without any value, so the value of it will be undefined, and it the engine stops iterating on the first condition

rest1.owner &&= '<ANONYMOUS>' // comparing to before where a new property with the value undefined was made, here this command does NOT create a new property
rest2.owner &&= '<ANONYMOUS>' // here the value of the property is replace with the string passed 
console.log(rest1.owner)
console.log(rest2.owner)