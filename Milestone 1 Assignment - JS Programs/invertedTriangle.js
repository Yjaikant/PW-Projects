// JavaCript code for Inverted Right Angled triangle //

// For this problem we will use nested loop

for (let i = 6; i >= 1; i--) {//outer loop iterating from 6 to 1
  let bag = ""; // an empty string to store a symbol
  for (let j = i; j >= 1; j--) {// inner loop iterating from i till it is greater than 1 
    bag = bag + "*"; // storing * inside bag to make a pattern
  }
  console.log(bag);// printing the required pattern
}
