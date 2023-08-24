const bicycle = {
    gear: 2,
    setGear: function (newGear) {
        "use strict";
        this.gear = newGear;
    }
}

bicycle.setGear (3);
    
console.log(bicycle.gear);

 //    ||
 //    ||
 //    ||
 //    ||
 //   \  /
 //    \/

 // Simpler 
 const bicycle2 = {
    gear: 2,
    setGear(newGear) {
        "use strict";
        this.gear = newGear;
    }
}

/*
    - Even without using the function keyword, a new property/field is made within the bicyle object
    with the name setGear that is also a function, just like in the first example above.
*/

bicycle2.setGear (3);

console.log(bicycle2.gear);