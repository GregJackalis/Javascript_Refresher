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

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    
    // orderDelivery: function(obj) { //simple function that takes an object, but we can also destructure it as the argument obj is being passed into the function, check line 32
    //     console.log(obj);
    // }

    orderDelivery2: function ({starterIndex, mainIndex, time, address}) {
        console.log(starterIndex, mainIndex, time, address) // now the values separated will be printed and NOT the whole obj that was passed in. We used the same names as the properties that are being sent to the function but we can always change them like the one below
    },

    orderDelivery3: function({starterIndex: i = "No started chosen", mainIndex: j = "No main chosen", time: t = '00:00', address: loc = "No location provided"}) {
        console.log(i, j, t, loc) // this will print the same as the above function. the only difference is that we use our own variable names for the properties that are being passed in 
        console.log(`Order recieved!\nStarter: ${this.starterMenu[i]}\nMain: ${this.mainMenu[j]}\nAt: ${t}\nTo be delivered at: ${loc}`) // see how we alaso use the THIS keyword to point to the restaurant object and use its properties
    }
};

// the function we're calling as a property takes one argument, then here we open parenthesis to send that argument and then we make our own object to send
restaurant.orderDelivery3 ({
    time: '23:30',
    address: 'Somewhere in Greece',
    mainIndex: 2,
    starterIndex: 0
})

restaurant.orderDelivery3({
    address: "Somewhere",
    mainIndex: "2"
})


// To destructure objects we use curly braces, just how we make them
// const {name, openingHours, categories} = restaurant; // when the variable names are exactly the same as the property names inside the object, then we can just do this
// console.log(name, openingHours, categories);

// Now in order to have different variables names for the properties we're calling, we do this
const {name: restName, openingHours: hours, categories: tags} = restaurant; // it looks similar to a dictionary
console.log(restName, hours, tags);

// NOTE: As you can see, with objects we don't need to leave empty gaps between the variables in order to skip properties, comparing to arrays where we have to do smth like const [a, , b] = arr.
// With objects we just simply write the name of the property and thejn comparing to the names we want to use, we use the above methods


// Default values (very useful for api, fetching data, etc)
// const {
//     mainMenu = [],
//     starterMenu: starters = [],
//     place: loc = "",
//     menu = "!!!Property menu Not Found" // this property doesn't exist so we give it will return a default value, the warning string in this case
// } = restaurant;
// console.log(mainMenu, starters, loc, menu);


// Mutating variables while we're destructuring objects (switching two variables, etc)
let a = 111;
let b = 555;
const obj = {a: 23, b: 7, c: 14};

// we want to change the variables a and b to 23 and 7
// {a, b} = obj; // we get an error here, because when we start a line with curly brace, then js expects a code block

// To solve this, we need to wrap it into parenthesis
({a, b} = obj);
console.log(a, b)


// For Nested Objects (we will use the openingHours property that includes other objects inside)
const { fri } = restaurant.openingHours; // getting the fri object frm the openingHours property. Remember that just using: const {fri} = openingHours;  WONT WORK
// It's not the same as the previous ones where we were getting layer-one properties, and all we did was to name the property and then write " = restaurant"
console.log(fri)

const {fri: {open, close}} = restaurant.openingHours; // destructuring the nested obj fri from the openingHours property inside the obj restaurant
console.log(open,close)

const {
    fri: 
    {
        open: o = 0, 
        close: c = 0
    }
} = restaurant.openingHours; // used other names for the variables, AND added default values to it
console.log(o, c);