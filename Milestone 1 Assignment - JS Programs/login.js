//  JavaScript Program for Login Details Validation

let userName = "username";
let passWord = "userPassword";

let databasePassword = "userPassword"; // or userpaswrd- then the output will be "Password didn't match. Password validation unsuccessful".

if (databasePassword == passWord) {
  console.log("Password Matched. Password validation Successful.");
} else {
  console.log("Password didn't match. Password validation unsuccessful");
}
