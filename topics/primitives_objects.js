"use strict";

let lastName = 'Tsakalis';
let oldLastName = lastName;
lastName = 'Paparis';
console.log("Old:", oldLastName, "New:", lastName) // each primitive value will be saved at its own address/position in the stack that's why we can have both

// For Reference Values/Type Values, aka Objects
const Meara = {
    firstName: 'Meara',
    lastName: 'Arnaoutis',
    age: 23
};

const marriedMeara = Meara 
/*  -The const keyword is supposed not to let us change anything (values) on marriedMeara, but yet we 
    do and we can- and that's because the actual value "marriedMeara" has is the address of the object which we are not changing. 

    - We're only changing the underlying object inside the heap. So we could say that the const keyword 
    checks for changes on the values inside the call stack, and not the heap- so if it was to do smth 
    like: 
    marriedMeara = {};
    then it wouldnt let us because what happens w/ this command is that we're changing the address of 
    this variable in memory and therefore the value of the variable changes, which in this case that 
    value is the reference to the object inside the heap memory
*/

marriedMeara.lastName = 'Tsakalis'
console.log("Before getting married:", Meara.lastName, "After getting married:",marriedMeara.lastName)
// in both cases the lastName will be "Tsakalis" and it is not correct. We know why from the theory and the notes. Basically this is happening because marriedMeara it's just a new variable that points to the same exact value, in which this value is the address in the heap (memory) of the Meara object- so the marriedMeara is NOT a whole different object, so changing its properties will result in changing the object's properties in general, meaning that "Meara" will also change.

// In other words, both variables "Meara" and "marriedMeara" are pointing to the same exact object in the heap (memory), so changing the property on one variable- means the property for the other variable will change too


// SOLUTION TO COPYING OBJECT WITHOUT HAVING ANY VALUE PROBLEMS
const Meara2 = {
    firstName: 'Meara',
    lastName: 'Arnaoutis',
    age: 23
};

const marriedMeara2 = Object.assign({}, Meara2) // what the .assign does is that it takes two arguments and it basically combines two objects and returnes one. So in this case we can use an empty object and the object we want to copy from and with this method we can make a "shallow" copy of an object

marriedMeara2.lastName = 'Tsakalis'
console.log("Before getting married: " + Meara2.lastName, "After getting married: " + marriedMeara2.lastName) // it works

//BUT THERE'S A PROBLEM, the .assing is good just for copying first-level objects. In case, there's an object inside an object, then when the outer object gets copied- the inner object will still have the same value (position to object in heap memory) as before, for example:
const Meara3 = {
    firstName: 'Meara',
    lastName: 'Arnaoutis',
    age: 23,
    family: ['Dimitris', 'Eleni', 'Julie']
}

const marriedMeara3 = Object.assign({}, Meara3)
marriedMeara3.family.push('Bobby');
marriedMeara3.family.push('Dixie');

console.log("Before getting married: " + Meara3.family, "After getting married: " + marriedMeara3.family) //it's the same for both cases and it is not correct. So as we can see the Object.assign() method creates only a "shallow" copy of an object, and cannot go any deeper

// AND in order to succesfully copy one object (with deeper levels and everything) we need to create a what is called deep clone. Usually this is achieved by using an external library called Lo-Dash (later scetion)