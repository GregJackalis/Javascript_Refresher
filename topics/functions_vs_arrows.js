"use strict";

var firstName = 'Matilda'; // this is dangerous because the var variables create PROPERTIES on the window object and then inside the object when we use the this.firstName commmand, it will actually try to find in the window a property with the name firstName, and Matilda will be used and NOT Greg. Even though it was called through the greg object

const greg = {
    firstName: 'Greg',
    year: 2003,
    calcAge: function () {
        console.log(this)
        console.log(2023 - this.year)

        const self = this; // SOLUTION 1 to isMillenial problem, it can also be called that. Pre - ES6 solution

        const isMillenial = function() {
            // console.log(this)
            // console.log(this.year >= 1981 && this.year <= 1996); // in this case the THIS keyword is undefined, that's because this is just a regular function just like if it waqs made outside of the object. It's just the same function as if it was outside of this calcAge method

            console.log(self)
            console.log(self.year >= 1981 && self.year <= 1996); // SOLUTION 1
        };


        //SOLUTION 2 => Using an Arrow Function
        // we use an arrow function because as we know: Arrow Functions use the THIS keyword of its parent's scope. So in this case the THIS keyword is the same as the THIS keyword inside the calcAge function/method
        const isMillenialArrow = () => {
            console.log(this)
            console.log(this.year >= 1981 && this.year <= 1996); // SOLUTION 2
        };

        isMillenial();
        isMillenialArrow();
    },

    greet: () => console.log(`Hey ${this.firstName}`), // this will return "Hey undefined", and that's again because arrow functions do NOT have their own THIS keyword, so they're using the lexical keyword, meaning their parent's scope THIS keyword, so the global THIS keyword which in this case becuase of the "use strict" rule, the global THIS keyword is "undefined"

    // Keep in mind that these curly brackets are NOT a (code) block, they're used to define objects. That's why it is not used as a scope and therefore the THIS keyword inside the arrow function, points to the scope it's already in (like the rest of the properties), the global scop. Everything in here belongs to the global scope

    greeting : function() {console.log(`Hey ${this.firstName}`)} // in this case the function has its own THIS keyword and it uses it to see who called it and which is the owner. The THIS keyword in this case is NOT the GLOBAL WINDOW, but the OBJECT that is calling it- in this case Greg- so it points to the actual firstName property inside the object of greg.
}

greg.greet(); // with var variable and arrow function (wrong)
greg.greeting(); // with regular function and the correct firstName property/value
greg.calcAge();

// Arguments Keyword, args is only accessible in regular functions
const addExpr = function(a,b) {
    return a + b;
}
console.log(addExpr(2, 3))

 //    ||
 //    ||
 //    ||
 //    ||
 //   \  /
 //    \/

const addExpr2 = function(a,b) {
    console.log(arguments) // arguments is used to pass into a function more parameters than we specified. It saves the parameters in an array
    return a+b;
}

addExpr2(2,3)
addExpr2(2, 3, 9, 10)

var addArrow = (a,b) => {
    console.log(arguments)
    return a + b;
}

addArrow(2,3) // the arguments keyword doesn't exist in arrow functions


