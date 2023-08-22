/*           ---------------------------------------------------------------
                                    1st Example */

var voxel = { x: 3.6 , y: 7.4 , z: 6.54 }

//The old/"basic" way of destructuring
var x = voxel.x
var y = voxel.y
var z = voxel.z

//With destructuring method
const {x: a, y: b, z: c} = voxel;

console.log(x, y, z)
console.log(a, b, c)



/*           ---------------------------------------------------------------
                                    2nd Example */

const AVG_TEMPERATURES = {
    today: 38.6,
    tomorrow: 32.3
}

function getTemp0fTmrw(avgTemperatures) {
    "use strict";
    const {tomorrow: tempOfTomorrow} = avgTemperatures
    return tempOfTomorrow;
    }

console. log(getTemp0fTmrw (AVG_TEMPERATURES)) ; // should be 79


/*
    ** Keep in mind that the name of the variable when destructuring method is used, has to be
    ALWAYS to the right like in line 29:
    const {tomorrow: tempOfTomorrow} = avgTemperatures

    AND NOT:
    const {tempOfTomorrow: tomorrow} = avgTemperatures
*/


/*           ---------------------------------------------------------------
                                    3rd Example:
                        Destructuring items from Nested Objects */

const LOCAL_FORECAST = { 
    today: { min: 72, max: 83 },
    tomorrow: { min: 73.3, max: 84.6 }
}

function getMax0fTmrw(forecast) {
    "use strict";
    const {tomorrow: {max: max0fTomorrow}} = forecast //by using curly brackets we basically destructure each layer, so we use one on the tomorrow laywer to then reach the max value and destructure it as well so that it can be saved to the maxOfTomorrow variable
    return max0fTomorrow;
}

console.log(getMax0fTmrw(LOCAL_FORECAST)) ;



/*           ---------------------------------------------------------------
                                    4th Example:
        Using Destructuring to Assign Variables from Arrays (and not Objects only) 
        
        ** The problem with the Arrays is that we cannot specify which value we want to destrcture and save, we have to iterate througb the array, it goes with order.*/

// const [i, j] = [1, 2, 3, 4, 5, 6];
// console. log (i, j) ;


// Now in order to choose specific values on an array and skip a few we can do something like this:
const [i, j, , k] = [1, 2, 3, 4, 5, 6];
console. log (i, j, k) ;


let varA = 8, varB = 6;
(() => {
    "use strict";
    [varA, varB] = [varB, varA]
})()
console.log(varA); 
console.log (varB);



/*           ---------------------------------------------------------------
                                    5th Example:
                    Using Destructuring with the Rest operator*/

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo (list) {
    const [ , , ...arr] = list; //here we use destructuring in a way that inside the brackets [] there are the values we need from the list variable, which in this the first is being skipped and so the second one, and then the rest with the REST OPERATOR ...arr are save into an array called arr. 
    return arr;
}

const arr = removeFirstTwo (source) ;

console.log (arr);
console.log (source);



/*           ---------------------------------------------------------------
                                    6th Example:
             Using Destructuring to Pass an Object as a Function's Parameters.*/

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};


// 1st way:
const half = (function () {

    return function halfFunction({max: maximum, min: minimum} = stats) {
        return (maximum + minimum) / 2.0;
    };

})();

console.log(half());


// 2nd way:
const half2 = (function () {

    return function halfFunction({max, min}) {
        return (max + min) / 2.0;
    };

})();

console.log(half2(stats));