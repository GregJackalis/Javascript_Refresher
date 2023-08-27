
function sayHello(name) {
    console.log("Hello " + name)
}

// sayHello("Greg")

// console.log(window) //in node we don't have the document. or window. objects

/* SOME GLOBAL OBJECTS */
// console.log()

// setTimeout()
// clearTimeout()

// setInterval()
// clearInterval()

/* 
    - The window keyword refers to the global spectrum so it'd be something like this:
    window.console.log()
    window.setTimeout()

    But the JavaScript engine will prefix the above statements: with the window. so we don't have to type it everytime we want to use
    a global object.

    But there is also the global. keyword used in Node as well because window is not, and although with the window keyword we can
    also access global variables, with the global keyword we can't, for example this will return undefined:
*/

var message = "Greg"
console.log("This is with global. : " + global.message)
