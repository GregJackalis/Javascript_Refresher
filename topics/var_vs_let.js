/* 
    - in the var_variables function both of the console.log(i) commands will print out
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

/* - note that even if we didn't have the line of code var i = "original", and instead used var on
   the inside i variable, then the second consoloe.log (outside of the if statement) would still
   
   - whereas if we did the same thing but put inside the keyword "let" next to the i variable,
   then the second console.log outside the if statement wouldn't work*/


   
/* 
    - in the let_variables function the first console.log(i) command will print out
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