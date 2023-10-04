// JS Program for Greeting Promise //

// DEFINING A NEW FUNCTION THAT RETURNS PROMISE
//PROMISE ALWAYS GIVES TWO VALUES THAT IS RESOLVE OR REJECT
function GreetingPromise(name) {
    return new Promise(function (resolve, reject) {
      console.log("Fetching Data Please Wait!");
      setTimeout(() => {
        if (name) {
          resolve(`Hello, ${name}`);
        } else {
          reject("Failed to get Name");
        }
      }, 1000);
    });
  }
  
  // DEFINING TWO VARIABLES THAT EXPLAINS THEN OR CATCH METHODS FOR PROMISE ON RESOLVING OR REJECTION.
  let onSuccess = (result) => {
    console.log(result);
  };
  
  let onFailed = (error) => {
    console.log(error);
  };
  
  //CALLING FUNCTION WITH NAME JAIKANT //
  GreetingPromise("Jai Kant").then(onSuccess).catch(onFailed);
  GreetingPromise().then(onSuccess).catch(onFailed);
  // EXPECTED OUTPUT
  // HELLO, JAIKANT!