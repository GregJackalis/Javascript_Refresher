
const createPerson = (name, age, gender) => {
    return {
        name: name,
        age: age,
        gender: gender
    };
};
console.log(createPerson ("Grigoris Tsakalis", 20, "male"));

 //    ||
 //    ||
 //    ||
 //    ||
 //   \  /
 //    \/

 //Simpler way:
const createPerson2 = (name, age, gender) => ( {name, age, gender} );
console.log(createPerson2 ("Grigoris Tsakalis", 20, "male"));

/* 
    - Both createPerson functions do the same exact thing:
    -------------------------------------------------------
        On the first one we give the name of the key and the value we want to assign to it
        and they happen to have the same names
    -------------------------------------------------------
        On the second one we use an arrow function again but instead we use parenthesis, 
        meaning that we do not open a regular function, and then we pass the name of the keys 
        that will therefore get each parameters value just how they are assigned

*/
