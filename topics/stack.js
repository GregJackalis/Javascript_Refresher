var stackArray = [["greg", "meara", 943], [23, 54, "grigoris"]]
var getRecentlyAddedValue = stackArray.pop() //this variable will store the whole second array that was last added to the array

//now in order to access the last array and pop the last value from there we have to combine some of the previous lessons
var SecondArray = stackArray[stackArray.length - 1] //getting the second array
var lastItemFromSecondArray = SecondArray.pop() //popping the last value/item on the second array