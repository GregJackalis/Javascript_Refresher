// creating strings with template literals


// 1st example:
const person = { 
    name: "Grigoris Tsakalis",
    age: 20
}

// Template literal with multi-line and string interpolation
const greeting = `Hello, my name is ${person. name}! I am ${person.age} years old.`;

console.log(greeting);


 //    ||
 //    ||
 //    ||
 //    ||
 //   \  /
 //    \/


 // 2nd example:
 const result = { 
    success: ["'max-length", "no-amd", "prefer-arrow-functions"], 
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
};

function makeList(arr) {

    // 1st way:
    const resultDisplayArray = `<li class="text-warning">${arr[0]}</li>
<li class="text-warning">${arr[1]}</li>
<li class="text-warning">${arr[2]}</li>`;


    // 2nd way:
    const resultDisplayArray2 = []

    for (item in arr) {
       resultDisplayArray2.push(`<li class="text-warning">${arr[item]}</li>`)
    }


    // 3rd way:
    const resultDisplayArray3 = []

    arr.forEach(element => {
        resultDisplayArray3.push(`<li class="text-warning">${arr[item]}</li>`)
    });



    return resultDisplayArray3;
}

const resultList = makeList(result.failure)

console.log(resultList)