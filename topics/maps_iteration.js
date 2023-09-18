"use strict";
const restaurant = {
    name: "Greg's Pizza Place",
    place: "3 Shepherds Way, Bournemouth",
    categories: ['Italian', 'Pasta', 'Vegetarian', 'Organic'],
    starterMenu: ['Flamingo', 'Bruschetta', 'Garlic Bread', 'Ceasar Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
        ['friday']: {
            open: 12,
            close: 22
        },
        ['tuesday']: {
            open: 11,
            close: 23
        },
        ['monday']: {
            open: 0, // Open 24 hours
            close: 24
        }
    },

    orderPasta: function(ing1, ing2, ing3) {
        return `Here is your delicious pasta with:\n ${ing1}, ${ing2} and ${ing3}`;
    }
};


// There's another way to get values rather than just using the .get() method:
const question = new Map([
    ['question', 'what is the best programming language in the world?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'JavaScript'],
    ['correct', 3],
    [true, 'Correct  answer! 😁'],
    [false, 'Sorry, you were wrong 😬']
])
console.log(question);

// REMEMBER that when we're making an Map, we actually make an array on which each element is a 2-element-array, with the first element being the key and the second one being the value.
// OR we can also use an object in order to input data to the Map right when it is declared. For example we could also have done these below:
const questionArray = [
    ['question', 'what is the best programming language in the world?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'JavaScript'],
    ['correct', 3],
    [true, 'Correct  answer! 😁'],
    [false, 'Sorry, you were wrong 😬']
];
const questionMapArray = new Map(questionArray);
console.log(questionMapArray);


// AND WITH OBJECT
const questionObject = [
    {key: 'question', value: 'What is the best programming language in the world?'},
    {key: 1, value: 'C'},
    {key: 2, value: 'Java'},
    {key: 3, value: 'JavaScript'},
    {key: 'correct', value: 3},
    {key: true, value: 'Correct  answer! 😁'},
    {key: false, value: 'Sorry, you were wrong 😬'}
]

const questionMapObject = new Map(questionObject.map(item => [item.key, item.value])); 
// the .map() method is used to create arrays and in this case with an arrow 
//function and the 'item' variable which is basically every object element inside the questionObject array, we can use make new 2-element-arrays using the 
//properties of the object item (the properties are the key and value property names), and then this because of the .map() method it basically iterates over the 
//questionObject array like a for-of loop but quicker and better
console.log(questionMapObject);


// Does the "big array of 2-element-arrays" remind of smth? It's because it's the same as what the command Object.entries() returns, with the only difference
// that on the Object.entries() small arrays, the keys for each small array is the property name of the object passed to the method, and the value is the actual
// value of the property

// So afterall, we can easily convert from objects to maps:
const hoursMap = new Map(Object.entries(restaurant.openingHours)); 
console.log(hoursMap);


//  ITERATION

console.log(question.get('question'))
for (const [key, value] of question) { // it's just like iterating over objects, with the only difference that we use the Object.entries() method to actually convert the object into the same structure Maps are. So all we have to do here is destructure it's element of the Map into two variables
    typeof key === 'number' ? console.log(`Answer ${key}: ${value}`) : null; // using the typeof command to check if the data type of the key passed in is number, then print the answer 
}


// Checking the prompt and returning a reply to whether the user's answer is correct or not
const answer = parseInt(prompt('Your answer: '));

answer === question.get('correct') ? console.log(question.get(true)) : console.log(question.get(false));

//                  ANOTHER WAY
//     console.log(question.get(question.get('correct') === answer));
//------–––––––––––---–––––––––––––––––––––––––––––––––------------------
//              So in this code this happens:
//  - We get the value of the key with the name 'correct', with the question.get('correct') command which it will return 3 as we know because that's its value
//  - Then we strictly compare it to the number converted prompt answer, and THEN
//  - IF the comparison is correct then we will get this: console.log(question.get(true)) ===> meaning that the value of the true key will be returned
//  - AND IF the comaprison is wrong/false, it will return the value of the key false



// To CONVERT a Map to an Array:
console.log([...question]); // so here basically what is printed is the questionArray, before it got converted into a Map
