"use strict";

//  Splitting the string into multiple parts with .split() method
console.log('a+very+nice+string'.split('+'));
console.log('Grigoris Tsakalis'.split(' ')); // the split method splits the string by a specific string value and then stores the divided parts into an array as elements
// the above will print to the console this: array(2) ['Grigoris', 'Tsakalis']

const [firstName, lastName] = 'Grigoris Tsakalis'.split(' ');
console.log(firstName, lastName); // we can also use destructuring to save the elements of the array made with the .split() method
// ** We could have done the same with the .slice() method but it would be more complicated and almost impossible for longer strings

// using .join()method to join together elements of an array to form one string/sentence.
const newName = ['Mr', firstName, lastName.toUpperCase()].join(' ')
console.log(newName);

const capitalizeName = function (name) {
    const names = name.split(' ');
    console.log(names); // an array is made that it has for elements the strings made by dividing the "name" string according to the blank space between them
    const upperNames = []

    for (const element of names) {
        // upperNames.push(element[0].toUpperCase() + element.slice(1));
        upperNames.push(element.replace(element[0], element[0].toUpperCase())); // both are correct!
    }
    console.log(upperNames.join(' '));
}
capitalizeName('meara eleni arnaoutis');
capitalizeName('grigoris tsakalis');


//      PADDING a string: means adding a number of characters to the string until the string has a certain length
const message = 'Go to gate 23';
console.log(message.padStart(25, '+')) // this right here will add as many + symbols as it needs in order to make the "message" string reach 25 characters in length, check below
console.log(message.padStart(25, '+').length) // 25 is returned just like the parameter we passed in the padStart() method

console.log(message.padStart(25, '+').padEnd(30, '+')); // in this case the padStart() method adds as many + symbols needed until the string reaches 25 characters and then,
                                                    // the padEnd() method adds another 5 to the result length so that all togehter has a length of 30
console.log(message.padEnd(30, '+').padStart(25, '+')); // in this example for example, putting the .padStart() method after the .padMethod() or not, the whole string's length will still 30 all together

console.log(message.padEnd(25, '+').padStart(30, '+')); // here it starts at the end padding the string with + symbols until the string's length reaches 25 but then because of the extra .padStart() method, extra 5 + symbols will be added to the start of the string

// SO OVERALL, it does matter which one we use first but MOSTLY matters which length that is passed inside the parenthesis are also bigger


// REAL EXAMPLE: using padStart() and other string methods to mask credit cards and only save the last 4 digits and then "hide" the rest
const maskingCreditCard = function(dig) {
    const str = (dig + '').trim(); // converting the number to string, instead of using ==> const str = String(dig)
    const lastDigs = str.slice(-4);
    const creditCard = lastDigs.padStart(str.length, '*')
    console.log(creditCard)

    // OR in One Line
    console.log(str.trim().slice(-4).padStart(str.length, '*'));
}

const num = 345454553434253
const stringNum = '34545457655'
maskingCreditCard(num);
maskingCreditCard(stringNum);


// The repeat() method: allows the string to repeated multiple times
const warning = 'Warning, strong winds! Some flights may be cancelled or delayed!...\n' // used '\n' to make it prettier when the repeat() method repeats this method
console.log(warning.repeat(5)); // basically one big string is made with the string we used the replace() method with, and in this big string the warning string is repeated as many times as the number passed inside the method

const planeWarning = function(n) {
    console.log(`There are ${n} planes in line! ${'🛫'.repeat(n)}`)
}

planeWarning(6);
planeWarning(3);
planeWarning(10);