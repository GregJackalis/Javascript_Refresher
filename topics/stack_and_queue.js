//this program shows how we can use both pop and push functions of the stack data structure while also combine them with the queue functions, shift and unshift

function goBack(array, number) {
    array.pop()
    return array.unshift(number)
}

var arrayVar = [1, 2, 3 , 4, 5]

console.log("Before " + JSON.stringify(arrayVar))
goBack(arrayVar, 0)
console.log("After: " + JSON.stringify(arrayVar))

//keep in mind that the actions shift and unshift in queues are also called queue and dequeue