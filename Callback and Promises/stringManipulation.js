// JS Program for String Maniulation //

// MAIN FUCNTION THAT TAKES STRING AND A CALLBACK FUNCTION AS A PARAMETER
function manipulateString (inputStr,callback){
    let toUpperCaseString = inputStr.toUpperCase();
    return callback(toUpperCaseString)
}
// DEFINING NEW FUNCTION THAT WILL GO AS AN ARGUMENT IN MAIN FUCNTION AS A CALLBACK FUNCTION AND LOG THE OUPUT IN CONSOLE
function logString(toUpperCaseString){
    console.log(`The manipulated string is: ${toUpperCaseString}`)
}
// CALLING THE MAIN FUNCTION //
manipulateString("Jai Shree Ram!",logString)

// OUTPUT :  The manipulated string is: JAI SHREE RAM! //