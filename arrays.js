//we can have arrays inside arrays
var multiArray = [["john, 43"], ["greg", 20]] //this array looks a lot like (could be) a dictionary

//even though bracket notation couldn't be used to change letters inside a string, it does work with arrays
var array1 = [50, 25, 65];
array1[1] = 40;


//in order to select sepcific values from arrays that include otehr arrays we do
var strangeArray = [["john", 45, 60], [25, "bays"], [23, 65, 87]]
var printVar = strangeArray[1][1]; //this will be the value "bays"
var printVar2 = strangeArray[2]; //this will have the value of the whole array [23, 65, 87]
// console.log(printVar + "\n" + printVar2)