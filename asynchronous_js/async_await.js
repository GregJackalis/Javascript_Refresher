async function doSomethingAsync() {
    // Promises are used to handle asynchronous operations and represent values that might not be available yet.
    return new Promise(resolve => { //a Promise is created using the Promise constructor, which takes a single argument, commonly referred to as the executor function.

      setTimeout(() => {
        console.log("Async operation done.");
        resolve(); //this means that the the asynchronous operation is considered completed successfully
      }, 1000);
    });
  }
  
  async function executeAsyncTask() {
    await doSomethingAsync(); //The await keyword is used to pause the execution of the function until the promise returned by doSomethingAsync() is resolved
    console.log("Async task executed.");
  }
  
  executeAsyncTask();

  /*
    - The last line of the code invokes the executeAsyncTask() function.
    
    - When this line is executed, executeAsyncTask() begins its execution.

    - The await doSomethingAsync() line in executeAsyncTask() causes the function to pause and wait for the asynchronous operation in doSomethingAsync() to complete.

    - Once the doSomethingAsync() promise is resolved (after 1 second), the log message "Async operation done." is printed.
    
    - The execution continues, and the log message "Async task executed." is printed. 
  */
  