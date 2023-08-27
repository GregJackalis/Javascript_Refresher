// to load a function we use the require keyword

const loggerVariable = require('./logger') /* 
                use the name of the module/file we want to import, use ../ for a parent folder ander ./folder/file.js for a file 
                inside a folder this import the module and then by using a period . we can access everything that has been
                exported from that module */

const logFunction = require('./logger') /* This command import the function that is exported from the logger.js file/module */

// ** IT IS A MUST TO IMPORT WITH const KEYWORD, so we won't overwrite the value of logger accidentally

// loggerVariable.logFunction("Hello Greg") 

/* -1) In this case we use the imported module logger.js and its function that has been exported.

    2) Now that the function from logger has been exported as a function and not am object that has a function as a property, we 
    can just use:
*/


// logFunction("Hello Greg")