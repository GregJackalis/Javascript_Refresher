"use strict";


const weekDays = ['monday', 'tuesday', 'wednesday', 'friday', 'saturday', 'sunday'];

const openingHours = {
    // thu: {
    //     open: 12,
    //     close: 22
    // },
    // fri: {
    //     open: 11,
    //     close: 23
    // },
    // sat: {
    //     open: 0, // Open 24 hours
    //     close: 24
    // }
    [weekDays[3]]: {
        open: 12,
        close: 22
    },
    [weekDays[4]]: {
        open: 11,
        close: 23
    },
    [`day-${2 + 4}`]: { // we can compute a property name
        open: 0,
        close: 24
    }
};


// The restaurant is an object because we can literally see that we use the literal object syntax, aka the curly braces
const restaurant = {
    name: "Greg's Pizza Place",
    place: "3 Shepherds Way, Bournemouth",
    categories: ['Italian', 'Pasta', 'Vegetarian', 'Organic'],
    starterMenu: ['Flamingo', 'Bruschetta', 'Garlic Bread', 'Ceasar Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    //  Before ES6, in order to add the openingHours object inside this object we would have to do:
    // openingHours: openingHours, // but this right here might be a bit frustrating because of them having the same name (a whole global object and also a property inside the restaurant object)

    // ES6 Enhanced Object Literals:
    openingHours,
    
      
    orderPasta: function(ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with:\n ${ing1}, ${ing2} and ${ing3}`);
    },

    //2nd ES6 Enhanced Object Literal, no need to use the function keyword- it's like declaring a regular/simple function:
    orderPizza(ing1, ...otherIng) {
       let str = `Your main ingredient is ${ing1} and the rest are: `;
        for (const ingredient of otherIng) str += `${ingredient} and `
        console.log(str);
    }
};

restaurant.orderPizza('cheese', 'pepperoni', 'blue cheese', 'philadelphia')
console.log(restaurant.openingHours);