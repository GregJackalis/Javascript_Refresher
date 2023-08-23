function makeClass() {
    class Thermostat {
        constructor(temperature) {
            this.temp = 5/9 * (temperature -32)//the this keyword means that this variable (w/ the name temp) is only accessible within this class
        }
        
        // getter
        get temperature() {
            return this.temp
        }

        // setter
        set temperature(updatedTemp) {
            this.temp = updatedTemp
        }

    }
    return Thermostat
}

const thermostat = makeClass() //we make a thermostat class

const thermos = new thermostat(76) //we make a thermos object based on the thermostat (& constructor)

let temp = thermos.temperature /* we make a variable that uses the temperature get method, therefore 
                                  it gets the temperature value that was calculated inside the constructor and it returns it, instead of returning the whole object*/

thermos.temperature = 26; // here the set method is being used with the .temperature, and it sets the temperature to 26. Careful, it's different than the one in line 22 where we send a number just like in a function

temp = thermos.temperature; // the variable temp stores with the get method again, the new temperature that was made by using the set method

console.log(temp)