const { exit } = require('process');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var contacts = [
    {
    "first name": "Akira",
    "last name": "Laine",
    "number": "0543236543",
    "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
    "first name": "Harry",
    "last name": "Potter",
    "number": "0994372684",
    "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
    "first name": "Sherlock",
    "last name": "Holmes",
    "number": "0487345643",
    "likes": ["Intriguing Cases", "Violin"]
    },
    {
    "first name": "Kristian",
    "last name": "Vos",
    "number": "unknown",
    "likes": ["'JavaScript", "Gaming", "Foxes"]
    }
];


function lookupInfo(name, attr) {
    var found = false
    rl.question("Type in the name you want to search for: ", function(answer) {
        name = answer

        for (let i = 0; i < contacts.length; i++) {
            if (contacts[i]['first name'] == name) {
                var person = contacts[i]
                found = true
                rl.question("Type in the title of the info you want to see for " + name + ": ", function(answer2) {
                    let modifiedValue = answer2.toLowerCase();
                    attr = modifiedValue
                    if (person.hasOwnProperty(attr)) {
                        console.log(person[attr])
                    } else {
                        console.log("We do not have this field of information for " + name)
                    }
                    exit()
                });
            }
        }

        if (found === false) {
            console.log("Person with the name " + name + " was not found in our contacts")
            exit()
        }
    });
}

lookupInfo();