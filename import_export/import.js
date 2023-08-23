//the ./ means from the current directory and then it follows up with the name of the file we're importing from

// for ES6
import { capitalizeString } from "./export"; 

const cap = capitalizeString("hello");

console.log(cap);

// importing everything from a file
import * as capitalizeStrings from "./export";


//importing default export, we don't use curly brackets like we did on the first simple import
import subtract from "./export"

console.log(subtract(7, 3))