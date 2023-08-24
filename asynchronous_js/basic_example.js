// synchronous functions
/*
    - Asynchronous is when one functio/task to start need for the previous one to be finished 
    completely. It's like all the tasks are in a waiting queuer waiting for the previous one (the one
    arrived before them) to finish so that they start
*/

console.log("I")

console.log("Eat")

console.log("Ice-Cream")

console.log("With")

console.log("A")

console.log("Spoon")


// asynchronous

/* 
    - Asynchronous is when all tasks work at the same time and are not synchronized, meaning that
    each one will finish/work at its own pace
*/

console.log("I")

console.log("Eat")

setTimeout(() => {
    console.log("Ice-Cream")
}, 4000) //1000 miliseconds (meaning 1 second)

console.log("With")

console.log("A")

console.log("Spoon")


// callbacks

/* 
    - A callback is a function that is passed as an argument to another function and is intended to be executed later, often after a specific task or operation is completed. 
*/

function doSomethingAsync(callback) {
    setTimeout(function() {
      console.log("Async operation done.");
      callback(); // This is where the callback function is called
    }, 1000); // Simulating a 1-second delay
  }
  
function callbackFunction() {
    console.log("Callback function executed.");
}
  
doSomethingAsync(callbackFunction);
  