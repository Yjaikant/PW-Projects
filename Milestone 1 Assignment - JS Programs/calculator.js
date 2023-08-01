//  Javascript Program for Calculator //

let num1 = 5;
let num2 = 2;

let operator; // here you can insert any of the operator : +, -, *, /

switch (operator) {
  case "+":
    console.log(num1 + num2);
    break;
  case "-":
    console.log(num1 - num2);
    break;
  case "*":
    console.log(num1 * num2);
    break;
  case "/":
    console.log(num1 / num2);
    break;
  default:
    console.log("Invalid Operator");
  //if no operator is assigned then output will be "Invalid Operator".
}
