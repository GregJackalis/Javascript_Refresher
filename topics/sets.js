"use strict";

// In the past JS had only objects and arrays (Data structures), but with ES6 sets and maps were introduced


// A set is a collection of unique values (meaning it doesn't have any duplicates)
const ordersSet = new Set(
    [
        'Pasta', 
        'Pizza', 
        'Pizza', 
        'Risotoo', 
        'Pasta', 
        'Pizza'
    ]
);
console.log(ordersSet); // all the duplicates are gone, and it looks similar to arrays ==> they are iterals and also just have values, not properties with values
//BUT ARE ALSO DIFFERENT: its elements are uniqiue, and the order of the elements in the set are irrelevant

console.log(new Set('Greg')); // strings can also be iterable

console.log(ordersSet.size); // getting the size, which in this case it will bring 3 (not the duplicates)- dont confuse it with .length on arrays

console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread')); // checking if the set includes the value give. Notice the .has is actually a method ()

ordersSet.add('Garlic Bread'); // We can also add values/elements to the set and even if we add it twice like in this case, the set will ignore it because it only has unique values
ordersSet.add('Garlic Bread');
console.log(ordersSet);


ordersSet.delete('Garlic Bread'); // we can also delete elements/values
console.log(ordersSet);

// ordersSet.clear(); // this method clears a set
// console.log(ordersSet);


// BUT HOW can we actually retrieve values from a set, can we retrieve indeces or the values right away? can we use a loop?
console.log(ordersSet[0]); // ===> undefined 

// - In sets there are NO indices, so there's no way of getting values out of a set. 
// - Because if you think about it, it makes sense. There are only unique values, nno duplicates, and they order does not matter so there's no need to get a value 
//   out of a set. 
// -We only need to know whether a certain value is in a set or not (using the .has() method)


// KEEP IN MIND, sets are iterables therefore we can loop over them
for (const order of ordersSet) {
    console.log(order); // works regularly
}



// REAL EXAMPLE (the main use of sets are to remove duplicates from arrays)
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']; 
// lets say 1) we're interested in knowing what different positions there are in a restaurant, and 2) have a unique array

//for the UNIQUE ARRAY (2)
const staffUnique = new Set(staff);
console.log(staffUnique); // but we want this to convert it to an array

const staffNewArray = [...staffUnique];
console.log(staffNewArray);

// OR WE CAN DO THIS
const shortStaffUnique = [...new Set(staff)]; // the same thing as in the line 60, but in one line
console.log(shortStaffUnique); // an array is made basically, and then by using the SPREAD operator we take the unique values from the set and put them inside the newly declared shortStaffUnique array


//for the (1), we can just do this
console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size);
// OR
console.log(staffUnique.size);


// ** Extra use (for strings because they're also iterable)
console.log(new Set('GrigoriosTsakalis')); // this will print only the unique characters in my name, and NOT the duplicates


// AFTERALL, sets are not as important as arrays and they can only be used on very specific situations (such as making an array w/out duplicates)