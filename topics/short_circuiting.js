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
    },

    // Here because pizzas need at LEAST one ingredient, we use a single parameter for that, and then the REST operator for the rest ingredients if any are sent
    orderPizza: function(mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
        if (otherIngredients.length === 0) console.log(`Your ordered a pizza with only ${mainIngredient}!`);
        else {
            let str = `You ordered a pizza with: ${mainIngredient}`
            for (let i = 0; i< otherIngredients.length; i++) {
                str += `, ${otherIngredients[i]}`
            }
            console.log(str);
        }
    }
};



// OR and AND operators can ===> Use ANY data type, return ANY data type and can do short-circuiting

/*                       OR SHORT CIRCUITING
    - Short Circuiting in OR means that if the first value is a truthy value, 
    it will return the first value. 
    JS won't even take a look at the second value, and that's what is called SHORT CIRCUITING.

    - In case both values passed are not truthy- then because of JS SHORT CIRCUITING, the engine checks if the first one and when it sees that it is not truthy, then it goes and returns the second one.

    - JS Returns the value it founds truthy as soon as it founds one because that's how also the OR
    operator works. With the OR operator, one 'true' boolean is AT LEAST needed to return true, so thus why the engine circuits/iterates through the given values and as soon as it finds a "Truthy" value it stops
*/

console.log(3 || 'Greg')

console.log('' || 'Greg'); // Here the first value will be checked/eveluated, and then it will go to the next one which is truthy and it will return that (in this case Greg will be printed). note, that it doesn't need to be a boolean value

console.log(true || 0); // this first value is truthy so it returns true

// un-truthy values
console.log(null || undefined);
console.log(undefined || null);
console.log(undefined || 0 || '' || 'Hello' || null); // in this, the engine will circuit like a chain through the values until a truthy value is found. If none is found then it returns the last un-truthy value, just like below
console.log(undefined || 0 || '' || null);


// Example
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
/*     This ternary operator usage is similar to this:
        if (restaurant.numGuests) {  (===> exist)
            return restaurant.numGuess;
        } else {
            return 10;
        }
*/
console.log(guests1); 

// restaurant.numGuests = 23; // property added with value to the restaurant object
// const guests2 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests2); 


// WITH OR OPERATORS, the same thing but with less code
const guestsOR = restaurant.numGuests || 10; 
/*  it prints 10 because the restaurant object doesn't have a "numGuests" property, so after checking
    that the restaurant.numGuests is un-truthy, it then goes to the next one and sees that it's
    truthy so it returns that (aka the 10, the default value given). 
    
    - Keep in mind, that if restaurants.numGuests = 10; then it would return 10. The solution to this
    would be the nullish coalescing operator ==> check nullish_coalescing.js code in the topics folder
*/
// console.log(guestsOR);



/*                       AND SHORT CIRCUITING
    ** Works in the same exact and oposite way the OR operator works:
        - Since the and operator in order to return TRUE, needs to check that all of its conditions
        are truthy, then it means that IF ONE FALSE condition is found then it stops and returns
        false.

        - So that means that with AND SHORT CIRCUITING, as soon the engine finds an un-truthy value,
        it stops and returns that un-truthy value.

        - In case there are NOT UN-TRUTHY values, just like in the OR SHORT CIRCUITING but exactly the oposite. The last truthy value will be returned from the conditions.
*/

// First value is untruthy so 0 is returned 
console.log(0 && 'Jonas');

// Second value is untruthy, so undefined and null are returned
console.log('Greg' && undefined);
console.log('Greg' && null);


// All truthy values, so last one is returned
console.log(3 && 'Greg' && restaurant.name);
console.log('Meara' && 9);

// As soon an untruthy value is found, it stops and it returns that one value
console.log(34 && 'Greg' && 'George' && undefined && null && 60); // finds "undefined" first so it stops and it returns that


// Practical Example
if (restaurant.orderPizza) {
    restaurant.orderPizza('mushrooms');
}

/*          In this case we basically check: 
    - If orderPizza property exists (so it is a truthy value) then because of the AND SHORT CIRCUITING, it will skip it and go to the next value, which again it is a truthy value, so it will just end up returning the last truthy value of that condition.
*/
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'chicken');



//  ** The OR operator will return the FIRST TRUTHY VALUE and the LAST UNTRUTHY VALUE (if all of them are untruthy)
//  ==> We can use OR operator to set values, along with default values in case we have an untruthy value.

//  ** The AND operator will return the FIRST UNTRUTHY VALUE and the LAST TRUTHY VALUE (if all of them are truthy)
// -==> We can use the AND operator to execute code in the second operator, only if the first one is truthy.