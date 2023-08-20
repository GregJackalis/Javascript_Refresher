/*
    - In this code we use the Object.freeze() command in order to make an object read-only.
    Because just like in in the type const variable arrays, the properties of a const object can
    still change. Therefore we use the Object.freeze() to prevent any mutations of the object
    
    ** keep in mind that with the Object.freeze() command and the try-catch statements, the code
    should return an error, if not then it's still okay as long as no changes happen on the object
    and its properties that we are trying to access through the try block
*/


function objectFunction() {
    const math_constant = {
        PI: 3.14
    }

    Object.freeze(math_constant)

    try {
        math_constant.PI = 50
    } catch ( error ) {
        console.log(error)
    }

    return math_constant.PI;
}


console.log(objectFunction())
