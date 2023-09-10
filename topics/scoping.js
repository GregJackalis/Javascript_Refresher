"use strict";
calcAge(1990) // because of hoisting, the calcAge() function can be accessed/used here (before it is declared) but then inside the firstName cannot be used because the actual firstName variable is declared at the end of this code, and as we know let and const variables are NOT hoisted



function calcAge(birthYear) { // function is a global "variable"
    const age = 2023 - birthYear; // const is a block scoped variable, so age wont be able to be used outside

    // console.log(firstName) // firstName is a global variable (one level above in the scope chain), so it can be accessed by the calcAge function

    function printAge() {
        let output =`${firstName}, you are ${age}, born in ${birthYear}` // birthYear and age variable are accessible because they are defined in the above level in the scope chain, meaning they are defined inside the calcAge function. Then the firstName is being searched inside the current scope and the scope above- not the scope bellow in the scope chain, if it did that it'd print "Meara" and not "Greg". firstName is in the global scope and it can be accessed inside the printAge function

        if (birthYear >= 1981 && birthYear <= 1996) {
            const millenial = true;
            const firstName = "Meara" // because of this variable and the way the scope chain works, the string underneath will have the "Meara" name instead of "Greg" and that's why the program looks first inside the scope the check variable is in and IF it's not found it goes higher and searches, so in this case since it's found inside the same scope, it takes "Greg" place

            var check = `You are a millenial, ${firstName}!`
            output = "NEW OUTPUT"
        }

        // console.log(millenial) // millenial cannot be accessed because const and let variables are BLOCK-SCOPED, meaning that they are only accessible inside the block they are declared (and the block's children therefore)

        console.log(check) // here the check variable works just fine, because var variables are FUNCTION-SCOPED, meaning that they can still be used outside the block they were declared but NOT outside the function they are. so in line 30 and line 22, the check variable wont be accessed

        console.log(output) // the output here works fine with the new value because the variable was simply manipulated. BUT, if a new output variable was created with that value, then the new value wouldn't be accessible here
    }

    

    // console.log(check) //as you can see the check var-type variable is accessible outside of the if block but NOT outside the printAge function, meaning that the var variables are FUNCTION-SCOPED
    printAge();
    return age;
}

const firstName = "Greg";
calcAge(1986);

// console.log(check) // as you can see the check var-type variable is accessible outside of the if block but NOT outside the function, meaning that the var variables are FUNCTION-SCOPED

// printAge(); // this will not work because the function printAge is defined and declared inside the scope of the function calcAge, so the printAge function it is NOT accessible here

// console.log(age); // cannot have access to variables defined inside child scopes, in this case the age variable is defined inside the child scope of the calcAge function
