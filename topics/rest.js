"use strict";

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
            let str = `You order a pizz a with: ${mainIngredient}`
            for (let i = 0; i< otherIngredients.length; i++) {
                str += `, ${otherIngredients[i]}`
            }
            console.log(str);
        }
    }
};



// The REST operator uses the three dots '...' just like the SPREAD operator, but it's the oposite of that- kind of. The SPREAD operator is used to expand an array to individual variables/values, meaning that we "pick up" each element from an array. WHEREAS with the REST operator we use it to collect multiple elements and condense them into an array (so we can pass them into an array, etc)


// SPREAD operator, because we use it on the RIGHT side of the EQUAL SIGN (the assignment operator):
const spreadArr = [1, 2, ...[3, 4]]; 
console.log(spreadArr);

// REST operator, because it's on the left hand side of the assignment operator (aka Equal Sign):
const [a, b, ...others] = [1, 2, 3, 4, 5]
console.log(a, b, others); // we're basically using the DESTRUCTURING method for arrays combined with the REST operator. In this case the a and b are simple variables with values, but the others variable is an array including the rest of the elements that are un-used in the array, BUT AFTER the last variable- meaning that it the REST operator won't include any skipped variables

// Both SPREAD and REST together:
const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza,risotto, otherFood);
/* 
    So in this part what happens is:

    1) On the left hand side: 
        - We destructure an array, by making three variables. One pizza variable, then one element is skipped, then a risotto variable, and then an array variable called otherFood with the REST operator.

    2) Then on the right hand side we make an array that includes two parts:
        - In the first part we use the SPREAD operator to expand the mainMenu array in the restaurant object, into individual values
        - Then in the second part we use again the SPREAD operator to expand the starteMenu array inside the restaurant object, into invidual values as well
        - Meaning that with these two parts, a whole array with just values from the mainMenu first array and then the starterMenu array will be made.
    
    3) Lastly, beause of the left hand size of the assignment operator, aka the destructuring method:
        - The very first value/element of the combined array made (which that first value will be also the first value of the mainMenu array) will be saved as the pizza variable.
        - The second value/element of the new combined array will be skipped, because of the destructuring method (an empty gap is made between the variables on th eleft hand side of the equal sign, thus the second element of the array, and also the second value of the mainMenu array, will be skipped)
        - The third value of the array, and also STILL a value that belongs to the mainMenu (the 'Risotto' value), will be saved into the risotto variable defined on the left hand side of the equal sign, inside the destructuring method.
        - Then the rest values inside the combined array on the right hand side of the equal sign, and AFTER the previous value 'Risotto', will be saved into a new array with the name otherFoods that uses the REST operator. 

    ** Keep in mind that: 
        1) The 'Pasta' value that was skipped inside the destructuring method, will NOT be saved into any variables, and specifically it will NOT be saved into the REST operator-created array otherFoods
        2) The REST operator needs to be LAST inside a destructuring method and the ONLY one - we can't have two variables with REST operators inside the same destructuring, for example:
            - const [pasta, , risotto, ...otherFoods, bread] ===> This will NOT work
            - const [pasta, , risotto, ...otherFoods, ...drinks] ===> This will NOT work

*/


// REST operator and OBJECTS, the remaining elements will be collected into a new object and not a new array
const {sat: saturday, ...weekDays} = restaurant.openingHours;
console.log(weekDays, saturday);


/*  With functions, we use the SPREAD operator, to expand an array for example when we're sending it
    to a function for example. 
    - eg: const arr = [0 , 1, 5, 10] ===> function(...arr) and all the elements are being sent as individual values

    With the REST operator we do the oposite. We want to sent different number of values, how many we want, and then inside the function combine everything into one array or one "object". To do that, we use the what are called "REST PARAMETERS".
*/

const add = function(...numbers) {
    console.log(numbers); // so in this case, the numbers variable is basically an array made with the values sent to the function, ANY number of values sent will be added into the numbers array, using the REST operator
    let sum = 0;
    for (let i = 0; i < numbers.length; i++)  sum += numbers[i];
    console.log(sum);
}

add(2, 3); 
add(5, 3, 7, 2);
add(23, 23, 6, 8, 9, 2); // in all three cases, arrays will be printed with each time the values passed into the function


// Another Example: In order to send an array with numbers into the "add" function, we will have to send it in the format of the above function calls, meaning that we need to "pick up" the values from inside the array, how can we do that? With the SPREAD operator. So below the SPREAD operator is used to pass individual values into a function, in which this function the REST operator is used in order to "gather" in an array any number of values passed into it, and then use this values through an array iteration (for loop)
const x = [5, 9 ,23]
add(...x); //Spred operator


// Testing the new function property inside the restaurant object
restaurant.orderPizza('Cheese', 'Onion', 'Pepperoni');
restaurant.orderPizza('Bacon');



/*  IMPORTANT: 
    - The REST operator is used where we would write VARIABLE NAMES SEPERATED BY COMMAS 
    (gathering values into an array, passing values into a function ==> rest parameter, etc)
    - The SPREAD operator is used where we would write VALUES SEPARATED BY COMMAS (destructuring an array, sending array elements into a function as individual values, etc)
*/