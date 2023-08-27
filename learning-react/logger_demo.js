//this is called the module wrapper function, this function does not belong to global scope
//but it actually belongs to this module's scope only
(function (exports, require, module, __filename, __dirname) {

    console.log(__filename)
    console.log(__dirname)
    var url = "http://mylogger.io/log"

    function log(message) {
        // Send an HTTP Request
        console.log(message)
    }

    // module.exports.logFunction = log;
    // module.exports.endPoint = url; 
    // the first value after the module.exports. is what the variable will be named when it is exported

    // NOTE: By not using the .logFunction command, what will be exported will be the actual variable which is a function. Not an object like it is right now.
    module.exports = log;

    console.log(module) //when this runs, we can see in the "exports" property that there is the logFunction

    //but we CANNOT write export = log; like we did on line 16
}) 