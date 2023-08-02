// JavaScript Program for Vowel Counter//

let nam = "Anurag Tiwari" // Enter any Name
let lowerCase = nam.toLowerCase();// to Convert name to lower case // we can also change it to upper case as per our requirements.
let vowelCount= 0; // this will be our vowel counter
for(let i = 0 ; i < lowerCase.length ; i++){// iterating loop over lowerCase variable
if(lowerCase[i]=== "a" || lowerCase[i]=== "e" || lowerCase[i]=== "i" || lowerCase[i]=== "o" || lowerCase[i]=== "u") {
  vowelCount++;
}
}
console.log(vowelCount);// printing the final output.
