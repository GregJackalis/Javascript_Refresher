var car = {
    "brand" : String,
    "cc" : Int16Array,
    "year": Int16Array,
    "price" : Int32Array
};

var myCar = [];
myCar.push(car.brand = "ferrari")
myCar.push(car.cc = 2000)
myCar.push(car.year = 2023)
myCar.push(car.price = 50000)


console.log(myCar)

//also can be used without any static titles or whatever
var team = {
    12 : "George",
    29 : "Maria",
    30: "Xristos",
    2 : "John"
};

var PlayerNumber = 12
console.log(team[PlayerNumber])


//in order to check if a class-variable has a specific type we use the .hasOwnProperty
var list = {
    vegetables : ["tomato",
    "cucumber", 
    "eggplant"], 
    meat: "tenderloin",
    extras: ["gum",
    "toothpaste", "shaving cream"]
}

function checkingList (attr) {
    if (list.hasOwnProperty(attr)) {
        return list[attr]
    } else {
        return "attribute/type of product " + attr + " not found!"
    }
}

console.log(checkingList("extras"))
console.log(checkingList("dairy"))