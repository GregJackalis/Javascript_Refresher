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

restaurant.numGuests = 50;
const guests = restaurant.numGuests || 10; 
/*      - Here because of the OR SHORT CIRCUITING working in a way that returns the first truthy
        value or the last falsy one, it should return 0. 
        - BUT because the 0 value is un-truthy, the above code will return 10. In order to fix that,
        we need to use the nullish coalescing operator
*/
console.log(guests);

const guestCorrect = restaurant.numGuests ?? 10;
/*
    - In this case, the correct value will be returned which in this case is 0. restaurant,numGuess=0

    - This happens because the nullish coalescing operator works with the concept of NULLISH VALUES 
    and not FALSY VALUES. With NULLISH values we mean the values "null" and "undefined", and NOT empty
    strings or the number 0
*/
console.log(guestCorrect);


// NOTE: The nullish coalescing operator works like OR, meaning that the FIRS NON-NULL VALUE value
// will be returned, OR the very LAST NULL VALUE will be returned in case ALL the values are NULL.
console.log(undefined ?? null);
console.log(null ?? undefined);