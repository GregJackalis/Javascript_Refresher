//this program shows the strictly comparison that there is in js
function testing_Simple_Equality(item) {
    if (item == "3") {
        return "the same" //when there is simple == then it will return "the same"
    }
    else {
        return "not the same"
    }
}

function testing_Strict_Equality(item) {
    if (item === "3") {
        return "the same"
    }
    else {
        return "not the same"
    }
}

console.log(testing_Simple_Equality(3))
console.log(testing_Strict_Equality(3))


//the same happens when we won't to change if two values are NOT true, eg sending 5
function testing_Simple_Inequality(item) {
    if (item != "3") {
        return "not the same" //in this case because there is simple != it means that the string variable will change type and then it will return "the same"
    }
    else {
        return "the same"
    }
}

function testing_Strict_Inequality(item) {
    if (item !== "3") {
        return "not the same" 
    }
    else {
        return "the same"
    }x
}

console.log(testing_Simple_Inequality(3))
console.log(testing_Strict_Inequality(3))