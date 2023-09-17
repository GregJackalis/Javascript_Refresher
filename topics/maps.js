"use strict";


// Maps: (a lot more useful than sets) ==> A map is a data structure that we can use to map values to keys (similar to a dictionary in python)
//  With the only difference that the key can be any data type (meaning that we can use objects, or vene other maps as keys to values inside a map), whereas in python
//   typically hashable and immutable data types as keys are used.
// Maps are also similar to objects, with the only difference again that object can only have STRINGS for KEYS, whereas like above, maps can have any data type as a KEY


const restaurantMap = new Map(); // the best way to create a map is to start by making it empty and then passing values afterwards
restaurantMap.set('name', 'Greg\'s Pizza Place'); // ===> first is the key name and then the value (this set is method is pretty similar to the .add method on Sets)
restaurantMap.set(1, 'Athens, Greece');
restaurantMap.set(2, 'Bournemouth, UK'); //keep in mind that the .set returns the updated map- Meaning that if we were to print this command here, we would get the whole map back.
console.log(restaurantMap.set(2, 'Bournemouth, UK')); // returns the whole updated math
console.log(restaurantMap);

//So because of .set returning the whole map everytime, we can actually chain the .set method and do smth like this
restaurantMap
    .set('categories', ['Italian', 'Pizeria', 'Vegetarian', 'Organic']) // the updated map is returned, thus we can use amother .set afterwards and chain them
    .set('open', 11)
    .set('close', 23)
    .set(true, 'We are open!')
    .set(false, 'We are closed... 😬'); // will be used later..

console.log(restaurantMap);


// In order to READ data from a map we use the .get method and then we pass in it the key of the value that we want to retrieve
console.log(restaurantMap.get('name'));
console.log(restaurantMap.get(true)); // keep in mind console.log(restaurantMap.get('true')); would NOT work because it's not the same with the keyword true (same with for example the number 1 and '1'- they're different so undefined would be print into the console)


const time = 11;
console.log(restaurantMap.get(time >= restaurantMap.get('open') && time < restaurantMap.get('close')));

/*
        So in the code above, starting from the inside and then working to the outside part:
    - We check inside the .get parenthesis if the time variable is bigger or egual to the value that is stored at the 'open' key (using the .get method and passing 
    the key 'open')
    
    - We check also inside that .get parenthesis if the time is smaller than the value inside the 'close' key (again by using the .get value and passing to it the name of the key 'close')

    - Then by using the and operator && we check if the restaurant is between the s number 11 and 23 (in this case) and it will return true and false, meaining
    that ===> the command will be either:
    1) console.log(restaurantMap.get(true));
    OR
    2) console.log(restaurantMap.get(false));

    - And then depending whether its true or false, the boolean value will be used at the .get method in order to find a value with the key <the boolean value>

    - At the end, the console.log() is used in order to return the value with the <boolean value> key (if there is any)


    ** So overall this is a good way to use boolean values inside maps, by checking them and returning them comparing to the conditions we make and how we want to use the actual values (inside the boolean value keys)
*/


// Checking if a map contains a certain key
console.log(restaurantMap.has('categories')); // returns true because the map contains the key passed inside the method
console.log(restaurantMap.delete(2)); // returns true because the key with the value 2 got deleted
console.log(restaurantMap.has(2)) // returns false because the restaurantMap map no longer has a key with the value of 2

// Getting the size of the map (how many keys there are, so how many values as well since each key pairs with a value)
console.log(restaurantMap.size);

// Clearing completely the map
// restaurantMap.clear();
// console.log(restaurantMap.size);


// Using ARRAY as a KEY
// restaurantMap.set([[1, 3], "Test"]);
// console.log(restaurantMap);
// console.log(restaurantMap.get([1, 3])); // this doesn't work because the two arrays are NOT the same object in the heap (just how we learned in the theoritical js lecture)

// In order to use an array as a key and actually retrieve it afterwards we would have to do this:
const arr = [1, 2];
restaurantMap.set(arr, 'Test');
console.log(restaurantMap.get(arr)); // it succesfully returns true


// Documents (elements and tags) from our website can be also used and passed inside maps (either as keys or values)
restaurantMap.set(document.querySelector('#mainHeading'), 'Heading')
console.log(restaurantMap);


// NOTE: Objects also have the .delete() method but it is a really slow process. ALSO, Objects have a similar to .has() method called .hasOwnProperty()