const { log } = require('console');
const { exit } = require('process');
const readline = require('readline');
const { json } = require('stream/consumers');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });



/*
- This variable is basically an objects that inside of that there are some keys.
- These keys then are connected and give back specific data that is accessible through some "attributes"

- We could say that this data stucture is an object that works as a dictionary and uses properties ("attributes")

*/

var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
        "Let It Rock",
        "You Give Love a Bad Name"
        ],
    },

        "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
        "1999",
        "Little Red Corvette"
        ]
    },

        "1245": {
            "artist": "Robert Palmer",
            "tracks": [ ]
    },

        "5439": {
            "album": "ABBA Gold"
    }
}


//varibale that stores a collection of the record
var collectionCopy = JSON.parse(JSON.stringify(collection))


function updateRecords () {
    let found = false;
    var id, attr, value;    
    
    rl.question("Write down the id of the record: ", function(answer) {
        id = answer
    
     rl.question("Type in the attribute/property you want to search for: ", function(answer) {
        let modifiedValue = answer.toLowerCase().replace(/\s/g, '');

        attr = modifiedValue;

        rl.question("Please insert the value you want to change it with: ", function(answer) {
                value = answer

                    for (var Record_Id in collection) {
                        if (Record_Id == id) {
                            var item = collection[id]
                            item[attr] = value
                            found = true;
                        }


                        if (found === true) {
                            console.log("\n\nFor Record with id: " + id)
                            console.log("Artist: " + collection[id].artist)
                            console.log("Album: " + collection[id].album)
                            console.log("Tracks:\n" + collection[id].tracks)
                            exit()
                        }
                    }

                    if (found === false) {
                        console.log("Record with the id " + id + " was not found.")
                        exit()
                    }
                });
            });
        });
    }

updateRecords()