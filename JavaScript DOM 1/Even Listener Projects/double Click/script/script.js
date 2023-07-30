// First of all getting all the elements and storing them into varibles

let line1 = document.querySelector(".para1");

let submit = document.getElementById("btn");

// 
// 
//  Adding Event Listener and Arrow Function
// 
//  
// button increasing the font size
let size = 18;
let pixel = "px";

submit.ondblclick = () => {
    size = size + 6;
    line1.style.fontSize = `${size+pixel}`;
    line1.style.color = "red";
}

