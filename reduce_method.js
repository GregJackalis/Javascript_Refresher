/* 
    - In this code there are a few examples of the .reduce method in JavaScript

    - About the .reduce:
        array.reduce() takes two arguments,
        1) the 1st one is a function, any function (anonymous, arrow, simple 'named')
        2) is the starting point, the value of the starting point. Meaning that if
        we are using for example the .reduce to find the sum of some values, we would
        start from 0

        So it would look something like this:
        array,reduce(() => {
            smth smth
        }, 0)

    - About the inner arrow function:
        it takes two parameters,
        1) the 1st one is called the accumulator, this takes the second value we input on the second
        argument of the .reduce method, aka starting point.
        2) the second parameter is about each individual item of the array, which is used to be added
        (in most examples) to the first parameter of the inner function.

*/


/* ------------------------------------------------------------
                        1st Example */

const items = [
    { name: "Rice", price: 5 }, 
    { name: "Book", price: 20 },
    { name: "Chicken", price: 10 }, 
    {name: "Monitor", price: 100}]

//simple way:
let totalPrice = 0
items.forEach(item => {
    totalPrice += item.price
})

// console.log(totalPrice)


 //    ||
 //    ||
 //    ||
 //    ||
 //   \  /
 //    \/

const totalPriceReduce = items.reduce((total, item) => {
    console.log(`Total: ${total}`)
    console.log(`Item: ${item.price} \n`)

    return total + item.price
}, 0)

console.log(totalPriceReduce)





/*                  ---------------------------------------------------------------
                                            2nd Example 
        - In this example we use the .reduce method to make a new object that contains inside all the
        people in the "people" array, grouped by their age

        ** Be careful of the second arguement of the .reduce method, aka "starting point". 
        In this case we use just empty {} curly brackets to tell that what will be made is an
        object that is currently empty/initialized

*/


const people = [
    {name: 'Kyle', age: 26 },
    { name: 'John', age: 31 },
    { name: 'Sally', age: 42 },
    { name: 'Jill', age: 42 },
]

const result = people.reduce((groupedPeople, person) => {
    const age = person.age
    if (groupedPeople[age] == null) groupedPeople[age] = []
    groupedPeople[age].push(person)
    return groupedPeople
}, {})

console.log(result)





/*                  ---------------------------------------------------------------
                                            3rd Example 
        - In this example we show that the function inside the .reduce method actually takes 4
        parameters.
        1st) is the parameter that is called the accumulator, which again, is the value that stores the second agrument of .reduce method, usually called starting point

        2nd) is the parameter that is used to iterate over an array, meaning that it takes the place
        for each item, similar to ==> (foreach item in array)

        ** Usually these two are mostly used on the .reduce function

        ---------------------------------------------------------------

        3rd) is the paramter that is used to store/show (in this example) the position the function
        is, every time it iterates over the array

        4rd) is the parameter used to show on which array we're working on. It can either store the
        name of the array or the number of values/position there are inside the array or even print the whole array everytime.
*/

const numbers = [13, 2, 5]

const sum = numbers.reduce((total, number, index, array) => {
    console.log(index, array)
    return total + number
}, 0)

console.log(sum)

/*                  ---------------------------------------------------------------
                                            Keep in mind:
        - That we don't have to use the second argument on the .reduce method, we can leave it empty 
        like this:
        ---------------------------------------------------------------
                    const numbers = [13, 2, 5]

                    const sum = numbers.reduce((total, number, index, array) => {
                        console.log(index, array)
                        return total + number
                    })

                    console.log(sum)
        ---------------------------------------------------------------

        and it will still run and return 20, which is correct in this case.

        - What changes is that when we don't put a value, the starting point/value will be the first value on the first position of the array, which means incase we have an empty array, an error will be thrown back to us.

        ** So it is advisable to NOT leave the second argument of the .reduce method blank.
*/
