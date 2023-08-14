// JavaScript Program for Splitting bills //
//Here I will be using ES6 Rest Operator for passing all the arguments inside Bill Splitter Function.
function billSplitter(persons, ...args) {
  this.persons = persons;
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total = total + args[i];
  }

  return `Total cost is ${total} and Each should pay ${Math.round(
    total / this.persons
  )}`;
}

let Input1 = billSplitter(4, 100, 200, 300, 400, 500);
let Input2 = billSplitter(6, 120, 250, 360, 470, 530);
console.log(Input1); // Total cost is 1500 and Each should pay 375.
console.log(Input2); // Total cost is 1730 and Each should pay 288
