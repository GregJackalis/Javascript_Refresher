/* 
    in the var_variables function both of the console.log(i) commands will print out
    "second", because it is type var and it is global meaning that inside the if statement 
    the value of i changes and it remains changed
*/

function var_variables() {
    "use strict";
    var i = "original" 
    if (true) {
        i = "second"
        console.log(i)
    }
    console.log(i)
}



/* 
    in the let_variables function the first console.log(i) command will print out
    "second", because the variable i is type let and it is declared inside the brackets of the 
    if statement meaning that when the if statement finishes and it goes back out, the second 
    console.log(i) will print "original" because the first i variable was never changed and its
    value remained the same
*/

function let_variables() {
    "use strict"
    let i = "original" 
    if (true) {
        let i = "second"
        console.log(i)
    }
    console.log(i)
}



console.log("\nvar variables:")
var_variables()
console.log("\nlet variables:")
let_variables()