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


// NOTE: The SPREAD operator is only good to us in cases where otherwise we would have used value spearated commas, that's what the spread operator is actually replacing. And compared to destructuring, we are not making new variables- and of course naming them- with the spread operator, whereas in destructuring we're basically dividing objects or arrays into new variables

const arr = [7,8,9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]]
console.log(badNewArr)

// with ES6
const goodNewArr = [1, 2, ...arr]; //instead of just typing [1,2,arr] which it'll pass the whole array, we use the spread operator ... to actually take all the elements of the arr array and pass them into this array
console.log(goodNewArr);

console.log(...goodNewArr); // the spread operator can be also used to print each element individually

const newMenu = [...restaurant.mainMenu, 'Gnocci']; // it can also used with object properties
console.log(newMenu)

// Important use cases: Copy Array and Merge Two Arrays together
const mainMenuCopy = [...restaurant.mainMenu] // shallow copy, just like Objects.assign

// Join 2 or more arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(menu);

// Iterables = arrays, strings, maps and sets. NOT objects
//since strings are iterable, then that means that we can use the spread operator on them
const message = 'Greg'
const letters = [...message, "'s"]
console.log(letters);
// console.log(`${...message} Tsakalis`) // this will not work because this method doesn't accept multiple values separated by a comma

const ingredients = []
for (let i = 0; i < 3; i++) {
    const ingredient = prompt(`Let\'s make some pasta! Ingredient ${i + 1}: `)
    ingredients.push(ingredient)
}

console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]); // the old way of passing each variable to the function

restaurant.orderPasta(...ingredients); // with the SPREAD operator



// The SPREAD operator works on OBJECTS too, even though they're not iterables
// creating a new restaurant object plus smth extra
const newRestaurant = {foundIn: 2023, ...restaurant, founder: 'Grigorios Tsakalis'}
console.log(newRestaurant); // it is used to create new objects by also using another object's properties, simply by using the SPREAD operator


// Can also be used to copy objects
const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Gregorius the 3rd'
console.log(restaurant)
console.log(restaurantCopy)