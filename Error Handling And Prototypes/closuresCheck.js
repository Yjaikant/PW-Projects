// JavaScript Program for checking the presence of number in an array using closure //\
let arr = [1,2,3,4,5];

function numberChecker(numbers){
  return function(num){
    return numbers.includes(num);
  }
}

let numCheck = numberChecker(arr);
console.log(numCheck(3))
console.log(numCheck(6))
