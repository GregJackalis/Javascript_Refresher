//to remove the first element from the array (like in queues) we use shift
var queueArray = [["greg", 943], "grigoris"]
//var firstlyAddedValue = queueArray.shift() //this variable will store the whole first array

//now in order to access the first array and shift the first value from there we have to combine some of the previous lessons
var firstArray = queueArray[0] //getting the first array, since we know that the queueArray includes other arrays as well
var lastItemFromSecondArray = firstArray.shift() //popping the last value/item on the second array


//to add a first element to the beginning of an array (in queues) we use unshift
var firstlyAddedValue = queueArray.shift() //this variable will store the whole first array


var firstArray = queueArray[0]
var firstItem = firstArray.shift()

var addVariableToQueue = firstArray.unshift("Meara") //this part is changing the "greg" value to "Meara" inside the first array of the queueArray