"use strict";
console.log(this)

const calcAge = function(birthYear) {
    console.log(2023 - birthYear);
    console.log(this); // this is set to undefined in strict mode to prevent accidental global object access and to promote safer coding practices. NOTE: This function has and uses its own THIS keyword.
}
calcAge(2003)

const calcAgeArrow = (birthYear) => {
    console.log(2023 - birthYear);
    console.log(this); // The THIS keyword in this line, it's the same one as in line 2. That's because arrow functions DO NOT have their own THIS keyword. So they use the what it's called, lexical this keyword. The lexical THIS keyword is the THIS keyword of the parent scope of the arrow function, so in this case the parent scope (one level above in the scope chain) is the global scope. So in this line of code the global THIS keyword is used
}
calcAgeArrow(2003) // again because arrow functions do NOT have their own this keyword, they use the lexical this keyword. Meaning the this keyword of the parent scope.

const greg = {
    year: 2003,
    calcAge: function () {
        console.log(this) // the THIS keyword inside a method, will be the object that is calling the method. So in this case this line of code will return the object greg, in other words it will return the OWNER of the method.

        console.log(2023 - this.year) // then by "pointing to" the object with the THIS keyword, we can use the object's/owner's method and poperties too. Just like in this case whee the year attribute/property is used from the object greg.
    }
}

greg.calcAge(); // NOTE: the THIS keyword points in general at the object that it's called but NOT specifically at "greg". The greg object is actually returned at this line right here because the greg object is actually the one that it's calling it

const matilda = {
    year: 2017
};

matilda.calcAge = greg.calcAge; //we copy the calcAge method/function from the greg object to the matilda object. This is called "Method Borrowing"

matilda.calcAge(); // it will return the age of matilda, 6.


/* - That's why the THIS keyword is dynamic, and NOT STATIC.
   - It can also be used to pass methods from one object to another, using it as a constructor as well
*/


// Constructor example
function Id() {
    this.name = "" // here the this keyword points to the object that is calling this constructor function
    this.printName = function() {
        console.log(this.name)
    }
}

const Greg = new Id();
Greg.name = "Grigoris"
Greg.printName();