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
        [weekDays[0]]: {
            open: 0, // Open 24 hours
            close: 24
        }
    },

    orderPasta: function(ing1, ing2, ing3) {
        return `Here is your delicious pasta with:\n ${ing1}, ${ing2} and ${ing3}`;
    }
};

if (restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open); // got rid of the error
if (restaurant.openingHours && restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);

/*  Instead of using the IF statementm, With ES6 and Optional Chaining, in case a property doesn't 
    exist- then it will return the undefined immedietly without having an error: 
*/
console.log(restaurant.openingHours.mon?.open); // ==> ONLY IF monday exists, meaning the property right before the question mark, only then the open property will be read from there. If NOT, then undefined will be returned

// console.log(restaurant.openingHours.mon.open); // this returns the error because mon is undefined

// We can also have multiple optional chainings, just like in line 29:
console.log(restaurant.openingHours?.mon?.open);



// REAL WORLD EXAMPLE
const days = ['monday', 'tuesday', 'wednesday', 'friday', 'saturday', 'sunday'];

// NOTE: We put the "day" value inside the brackets as a KEY because of what's called the "Square Bracket Notation" so that we can access a property of the openingHours object 
for (const day of days) {
    const open = restaurant.openingHours[day]?.open || 'closed'; // there is a problem with this, because the open value is 0 on monday, but it still says closed, that's like the and short-circuiting and the falsy values
    const openNew = restaurant.openingHours[day]?.open ?? 'closed'; 
    console.log(`On ${day}, we open at ${openNew}`);
}



// Optional Chaining and Methods: (checking if a method exists before we call it):
console.log(restaurant.orderPasta?.('pepperoni', 'blue cheese', 'mozzarella') ?? 'Method Does Not Exist!');

// NOTE: The optional chaining was released at the same time with short circuiting so they can be used together in the same commands and make it easier to check if properties, methods, etc exist



// Optional Chaining and Arrays (checking if it's empty):
const users = [
    {
        name: 'Greg',
        email: 'gregorysmth@gmail.com'
    }
]

// W/out optional chaining:
if (users.length > 0) console.log(users[0].name); else console.log('Users array empty');

// With optional chaining
console.log(users[0]?.name ?? 'Users array empty') // checks if the value on the left exists, aka users[0]

const usersNew= []
console.log(usersNew[0]?.name ?? 'Users array empty')


