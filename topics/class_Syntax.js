
// 1st way (the old way):
var SpaceShuttle = function (targetPlanet) {
    this.targetPlanet = targetPlanet;
}

var zeus = new SpaceShuttle ('Jupiter'); //the new keyword instantiates the SpaceShuttle Object
console.log(zeus.targetPlanet)

                //    ||
                //    ||
                //    ||
                //    ||
                //   \  /
                //    \/

// 2nd way (w/ constructor):
class SpaceShuttle2  {
    constructor(targetPlanet) {
        this.targetPlanet = targetPlanet
    }
}
var zeus = new SpaceShuttle2('Jupiter')
console.log(zeus.targetPlanet)



// 2nd Example:
function makeClass () {
    class Vegetable {
        constructor(name) {
            this.name = name
        }
    }
    return Vegetable;
}

const Vegetable = makeClass (); /* using a function to create a class with a contructor, then saving 
                                    the returned class to a variable */

const carrot = new Vegetable('carrot'); /* by using the variable that the new class is stored at, we
                                            use the new keyword and therefore create a new object
                                            Vegetable that has a property 'name' which its value is
                                            "carrot" */
console.log(carrot.name);
