// JavaScript Program for LinkedIn profile user name Validation //

let pattern = /^https:\/\/www\.linkedin\.com\/in\/[A-Za-z0-9_-]{5,30}[A-Za-z0-9]$/;
function profileValidation(url) {
  if (pattern.test(url)) {
    return "Input is a Valid LinkedIn Profile";
  } else {
    return "Input is not a Valid LinkedIn Profile";
  }
}

let checkProfile1 = "https://www.linkedin.com/in/johndoe123";
let checkProfile2 = "https://www.linkedin.com/in/johndoe123";
let checkProfile3 = "https://www.linkedin.com/in/johndoe_123";
let checkProfile4 = "https://www.facebook.com/in/johndoe123";
let checkProfile5 = "https://www.linkedin.com/in/johndoe$32asd123";

console.log(profileValidation(checkProfile1));//VALID
console.log(profileValidation(checkProfile2));//VALID
console.log(profileValidation(checkProfile3));//VALID
console.log(profileValidation(checkProfile4));//INVALID
console.log(profileValidation(checkProfile5));//INVALID
