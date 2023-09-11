// JS Program for Reversing the String with 2 sec delay. //

let input = "LoneWolf";

setTimeout(() => {
    let inputArray = input.split("");// split() method will covert string into an array.
    let reverseArray = inputArray.reverse();// var.reverse() will reversethe array.
    let resultStr = reverseArray.join("")// var.join("") will again convert reversed array to new string.
    console.log(resultStr);// OutPut : floWenoL //
}, 1000);