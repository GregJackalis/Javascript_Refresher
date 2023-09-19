"use strict";

const airline = 'Aegean Airlines Greece';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Real Example: Fix Capitalization in a Passenger's Name
const passenger = 'gReG'; // ===> it should look like this 'Greg'
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1); // taking the first number and convert it to upper case, then add the rest of the lower case string with the slice method
console.log(passengerCorrect);

// Real Example 2: Comparing emails
const email = 'hello@greg.com';
const loginEmail = '   Hello@Greg.Com  \n' // let's say this is what the user inputs, which is kind of correct- just in another format (no extra letters or antyhing, just a matter of spaces and uppercase-lowercase characters)

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim(); // the trim method gets rid of spaces and /n (enter value) at the START and END of the string, NOT in between the words!
console.log(trimmedEmail); // keep in mind that in es6 also trimStart and trimEnd methods got introduced and can be used to either specifically trim empty spaces in the beginning or the end

// the above can be done in one line of code
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail) // same as trimmed email

console.log(email === normalizedEmail); // a function that takes two parameters should also be mad in order to check and verify emails. One parameter will be the correct email and the other one will be the one the user is inputing and needs to be checked

// Example to see if the trim method trims also the spaces between words
const sent = 'Hello my name is greg '
console.log(sent.trim());


//      Replacing Parts of String (keep in mind that the .replace() method does NOT mutate the original array, it only makes a new one with the changes we made)
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.') // the replaced method takes two parameters: 
                                    // 1st) is the string/part that we want to be replaced on the string we want to change, 
                                    //2nd) is the string/part that will replace the first parameters in the replaced method (chaining can also be used)
console.log(priceGB, priceUS);

// using .replace() to replace string/words and not just characters
const announcement = 'All passengers must board from the door 23. Boarding from door 23!'
console.log(announcement.replace('door', 'gate')); // as we can see here, only the first 'door' string is replaced and the second one doesn't, to fix this we use:
console.log(announcement.replaceAll('door', 'gate')); // this new method can be used in order for all the 'door' values to be changed to 'gate'. 

// OR WE CAN USE a regular expression:
console.log(announcement.replace(/door/g, 'gate')); // this is a regular expression now and then the 'g' stands for GLOBAL, therefore every single 'door' value in the string will be change to 'gate'
//  NOTE: .replace() method is also CASE SENSITIVE


//      Returning Booleans (3 methods): .includes()  .startsWith()  .endsWith()
const plane = 'A320neo';
console.log(plane.includes('A320')); // true is returned
console.log(plane.includes('Boeing')); // false is returned

console.log(plane.startsWith('Air')); // but if we change it to this:
const newPlane = 'Airbus A320neo';
console.log(newPlane.startsWith('Air')); // true will be returned, and it doesn't need to match the entire word, only the beginning, so the below would also be TRUE
console.log(newPlane.startsWith('Ai')); // true as well, but the below is FALSE becaue the .startsWith() method is also CASE SENSITIVE
console.log(newPlane.startsWith('air')); // false is returned because of the reason above

if (newPlane.startsWith('Airbus') && newPlane.endsWith('neo')) console.log('This plane is part of the new Airbus amily');
if (plane.startsWith('Airbus') && plane.endsWith('neo')) console.log('This plane is part of the new Airbus amily');
else console.log('This plane is NOT part of the new Airbus Family');


// PRACTICE EXERCISE
const checkBaggage = function (items) {
    const userInput = items.toLowerCase(); // always convert user input (or string input in general) to lower case before checking anything, because if the .toLowerCase wasn't used, the first person with the Knife would still be allowed on board!
    userInput.includes('knife') || userInput.includes('gun') ? console.log('The passenger is NOT allowed to board the plane!!') : console.log('The passenger is clear and safe to board the plane. Safe travels!');
}

checkBaggage('The passenger has a laptop, some Food and a pocket Knife');
checkBaggage('Socks and Camera');
checkBaggage('The passenger has some snacks and Carries a gun for protection');