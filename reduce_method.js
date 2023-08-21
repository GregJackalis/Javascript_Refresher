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
// let totalPrice = 0
// items.forEach(item => {
//     totalPrice += item.price
// })

// console.log(totalPrice)


 //    ||
 //    ||
 //    ||
 //    ||
 //   \  /
 //    \/

const totalPrice = items.reduce((total, item) => {
    console.log(`Total: ${total}`)
    console.log(`Item: ${item.price} \n`)

    return total + item.price
}, 0)

console.log(totalPrice)





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

