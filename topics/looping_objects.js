"use strict";

const weekDays = ['monday', 'tuesday', 'wednesday', 'friday', 'saturday', 'sunday'];

const restaurant = {
    name: "Greg's Pizza Place",
    place: "3 Shepherds Way, Bournemouth",
    categories: ['Italian', 'Pasta', 'Vegetarian', 'Organic'],
    starterMenu: ['Flamingo', 'Bruschetta', 'Garlic Bread', 'Ceasar Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
        [weekDays[3]]: {
            open: 12,
            close: 22
        },
        [weekDays[1]]: {
            open: 11,
            close: 23
        },
        fri: {
            open: 0, // Open 24 hours
            close: 24
        },
        nameNew: 'Greg'
    },

    orderPasta: function(ing1, ing2, ing3) {
        return `Here is your delicious pasta with:\n ${ing1}, ${ing2} and ${ing3}`;
    }
};

const properties = Object.keys(restaurant.openingHours); // an array is made with the property names of the openingHour object inside the restaurant object
console.log(properties);

let openStr = `We are open ${properties.length} days a week: `

// 1st Looping over Property names, else called KEYS
for (const day of properties) { // the day variable is named because the porperty array contains days
    openStr += `${day}, `;
}
console.log(openStr);


// For Property VALUES
const value = Object.values(restaurant.openingHours); // the .values makes an array with the actual values inside the properties of the object passed in
console.log(value);

// The .entries() is used on for-of loops to return the index and the value in a 2-element array 
// inside an array that also includes the rest of the values and their indices inside small arrays
// With objects we can use it to return the KEY (=propery name) and its VALUE, but we have to do it a bit diferrently

const entries = Object.entries(restaurant.openingHours);
console.log(entries); //this will print an array that each element is a 2-element-array that includes a KEY and a VALUE

for (const entry of entries) {
    // console.log(`On ${entry[0]}, we open at ${Object.values({entries[1]})} and close at ${Object.values(entry[1])}`);
    //OR WE CAN DO THIS
    const [key, value] = [...entry];
    const [open, closed] = [...Object.values(value)]
    console.log(`On ${key}, we open at ${open} and close at ${closed}`);
}


//OR WE CAN DO THIS
for (const [key, {open, close}] of entries) { // the second value inside the entries array, is an object that also includes the KEYS open and close along with their values, so we also use object destructuring to get the open and close value themselves

    console.log(`On ${key}, we open at ${open} and close at ${close}`);
}


console.log(restaurant.openingHours.fri);
/*                              TO SUM UP:
    - Object.keys() ==> an array is returned with the property names of the object that is inside the parenthesis (or if the
    object has a property that is also an object)

    - Object.values() ==> an array is made with the values of the properties of the object that is passed inside the 
    parenthesis.

    So here:
    const openingHours = {
        [weekDays[3]]: {
            open: 12,
            close: 22
        },
        [weekDays[1]]: {
            open: 11,
            close: 23
        },
        [weekDays[0]]: {
            open: 0, // Open 24 hours
            close: 24
        },
        newName: 'GregDay'
    }
    ===> We can pass inside the parenthesis the object openingHours which it has the weekDays properties and then each 
    property has values (other properties with values per say). So the Object.values(openingHours) would return an array
    in which its elements are the values of the properties of the openingHours object

    MEANING, that it would return the three objects (because the values of the properties are objects, in a way) and 
    'GregDay', and it would look like this:
    [{...}, {...}, {...}, 'GregDay']; and then from that point in order to get the values inside the objects, we just 
    destructure them.

    - Object.entries() ==> does the two previous commands but at the same time, meaning that it creates an array in which
    each element is also an array, a two element array- in which the first element is the .keys() value (meaning the 
    property name) and the second element is the .values() (meaning an object that needs to be also destructured as well)
*/