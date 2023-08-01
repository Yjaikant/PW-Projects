// JavaScript Program for Capitalized every first letter of a word.


let name = "jaikant yadav" // here you can enter any Name.

let firstLetter = name.charAt(0);// it will fetch the first letter of every name/word.
let capitalizedFirstLetter = firstLetter.toUpperCase();// it will change the first letter to the upper case if it is in lower case.

//Now using the ternary operator;

(firstLetter === capitalizedFirstLetter) ? console.log(name) :
 console.log(capitalizedFirstLetter + name.slice(1));

///////////////////////////////////////////////////////////////////////////



  