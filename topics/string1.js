"use strict";

const airline = 'Aegean Airlines Greece';
const plane = 'A320';

console.log(plane[0]) // the string  works like an array in this case and this command prints to the console the letter A
console.log('B373'[0]); // this works too
console.log(airline.length); // just like an array, we can use the .length method to check how many characters (and spaces are in a string)
console.log('B373'[0]); // this works too


//                      STRING METHODS (also the .length method of the array can be used)

    // indexOf AND lastIndexOf
    console.log(airline.indexOf('e')); // we get the first position where the value that is passed in the parethesis, is in the string. ==> this will return 1
    console.log(airline.lastIndexOf('e')); // here it returns the last position where the value passed inside the parethesis, is inside the string. 

                                        // So now by passing the 'e' character, it will return the number 21, which is the 'e' character on the word 'Greece'
    console.log(airline.indexOf('Greece')); // like i said previously, it's about the VALUE passed in the parenthesis and NOT the character, so in this case we're searching
                                            // for the index of the first character of the 'Greece', which is 16. The same would have been returned if we used the capital letter 'G' inside the parenthesis

    // ** REMEMBER, that the .indexOf method is CASE SENSITIVE

    // slice
    console.log(airline.slice(16)); // the 16 is the begin parameter, meaning where the extraction will start. ==> SubString is made, the original string remains the same
            
        // That's why .indeOf methods adn the slice method is good to be used together. Because if we want to extract/slice something from a string, we need the exact positions/indices
    
        console.log(airline); // the original string remains the same even after using the slice method

    console.log(airline.slice(7, 15)); // the slice method also takes 2 parameters, the 1st on is the index that the extraction should start from and the extraction will STOP RIGHT BEFORE the 2nd PARAMETER 
                                       // this command will print to the console 'Airline'
        console.log(airline); // the original remains the same as we know

    // NOTE: The LENGTH of the new extracted string, is the two index parameters passed inside the slice command subtructed, so in this case the lenght would be 15-7 = 8
    const stringNew = airline.slice(7, 15);
    console.log(stringNew.length); // 8 is printed to the console

    // LETS EXTRACT THE FIRST WORD OF THE MAIN STRING W/OUT KNOWING THE INDICES (no hard-coding values)
    console.log(airline.slice(0, airline.indexOf(' '))); // this right here will print to the console the first word of the airline string
    console.log(airline.slice(airline.lastIndexOf(' '))); // this right here will use as the starting index, the last index where there is a blank space (meaning that since it's the last one, then after that the last word will be left)
                                                        // but it seems like a space is returned as well so in order to fix that we just add 1 to the whole "index parameter"
    console.log(airline.slice(airline.lastIndexOf(' ') + 1));

    console.log(airline.slice(-2)); // negative values can also be used as parameters inside the .slice method. This will make the command start from the end and go backwards
    console.log(airline.slice(1, -1)); // this right here starts after the first character in the string and also finishes one before the last character of the end of the string

    const middleSeatChecker = function(seat) {
       seat.slice(-1) === 'B' || seat.slice(-1) === 'E' ? console.log("You're sitting in the middle! Congrats? I don't know if that's good news lol 😬") : console.log("Unfortunately you are NOT sitting in the middle, so either be happy what you won't be squashed or be... sad that you won't be squashed? 🤷🏽‍♂️")
    }

    middleSeatChecker('11B');
    middleSeatChecker('4E');
    middleSeatChecker('24C');


// BUT, why all these work? String are just primitives right? Why do they have methods? Shouldn't methods only be available on Objects or Arrays?
// Well, JavaScript is very smart and what it does is that whenever a method is called on a string, JavaScript behind the scenes will automatically convert that 
// STRING PRIMITIVE to a STRING OBJECT with the same content, and that's the object where the methods are called on. 
// This process is called BOXING, and that's because the string is taken and being put into a box which is the Object.
console.log(new String('greg')); // so basically that's what javascript does behind the scenes when we're using a method with a regular string
console.log(typeof new String('greg')); // ===> "object" will be print into the console 

// And then after the string is made to an object and we use some methods and we want to return the result of the usage of those methods, the value is returned back to STRING, example:
console.log(typeof new String('Greg').slice(1)); // string will be returned