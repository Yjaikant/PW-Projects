//  JavaScript Program for finding highest marks.

let marks = [10, 20, 30, 40, 50]; //Array depecting list of marks obtained by the students.

let highestMarks = 0;

for (let i = 0; i <= marks.length; i++) {
  // this for loop iterates wover marks array.
    (marks[i] >= highestMarks)? highestMarks = marks[i]: null // Ternary Operator: (condition)? True Statement : False Statement;
  //here highestMarks value will be updated everytime if the number becomes greater than the previous number.

}
console.log(highestMarks);
