/*

- This variable if we look carefully because of the [] brackets we understand that it's an array. then from that point using {} curly brackets we make small "class"/dictionaries inside each "position" inside in the array.

- With both the checkingArray_w_ForLoop and checkingArray_w_IfStatement functions,
what we do is that without using nested if statements:
a)I first with if statements that if there is an attribute with such name on each position of the supermarket array, and IF that array's attribute that im checking, has the name "recipes" (in this example), then return from that place the .list attribute 

b)I do the same but with less lines of code by using a for loop

*/

var supermarket = [
    {
    type: "individual stuff",
    list: {
        vegetables : ["tomato",
            "cucumber",
            "eggplant"], 

        meat: "tenderloin",

        extras: ["gum",
            "toothpaste", 
            "shaving cream"]
        }
    },
    {
        type: "recipes",
        list: [
        tuscan_chicken = ["chicken thigh fillet",
                "heavy cream",
                "spinach",
                "cherry tomatos"]
        ]
    }

]

function checkingArray_w_ForLoop(attr, typeOf) {

    for (let i = 0; i < supermarket.length; i++) {
        if (supermarket[i].hasOwnProperty(attr) && supermarket[i].type == typeOf) {
            return supermarket[i].list
        }
    }

    return "attribute/type of product " + typeOf + " not found!"
}

function checkingArray_w_IfStatement(attr, typeOf) {

    if (supermarket[0].hasOwnProperty(attr) && supermarket[0].type == typeOf) {
        return supermarket[0].list
    } else if (supermarket[1].hasOwnProperty(attr) && supermarket[1].type == typeOf) {
        return supermarket[1].list
    } else {
        return "attribute/type of product "
         + typeOf + " not found!"
    }

}

console.log(checkingArray_w_ForLoop("type", "recipes"))
console.log(checkingArray_w_IfStatement("type", "recipes"))
