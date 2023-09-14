// JavaScript Code for URL Validation //

let urlCheck1 = "http://thepetnest12$.in";
let urlCheck2 = "https://thepetnest12$.in";

let pattern = /^[A-Za-z]{2,}:\/\/[A-Za-z]{3,}\d{1,}\$.[a-z]{1,}$/gm

    if(pattern.test(urlCheck1 && urlCheck2)){
        console.log("Input URL's matches the given conditions!");
    }else{
        console.log("Input URL's does not matches the given conditions!");
    }

