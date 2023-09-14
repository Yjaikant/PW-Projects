// JavaScript Code for URL Validation //
let pattern = /^[A-Za-z]{2,}:\/\/[A-Za-z]{3,}\d{1,}\$.[a-z]{1,}$/

function checkValidation(url){
    if(pattern.test(url)){
        return "Input URL's matches the given conditions!";
    }else{
        return "Input URL's does not matches the given conditions!";
    }
}

let urlCheck1 = "http://thepetnest12$.in";
let urlCheck2 = "https://thepetnest12$.in";
let urlCheck3 = "https1://thepetnest12$.in";
let urlCheck4 = "https://thepetnest12$.in.us";

console.log(checkValidation(urlCheck1));//VALID
console.log(checkValidation(urlCheck2));//VALID
console.log(checkValidation(urlCheck3));//INVALID
console.log(checkValidation(urlCheck4));//INVALID


