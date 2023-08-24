var myGlobal = 10; //this is also a global variable

function fun1() {
// Assign 5 to oopsGlobal Here
oopsGlobal = 5; //just because we dont use the vars keyword, then the variable automatically becomes global, so the fun2 function detects that it is defined and therefore the code inside the if statement runs
}
// Only change code above this line
 function fun2() {

    var output = "";
    if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
    if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
    }
}

console.log (output);

}
fun1 () ; 
fun2 ();