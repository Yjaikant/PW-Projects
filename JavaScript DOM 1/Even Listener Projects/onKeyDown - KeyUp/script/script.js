// First of all getting all the elements and storing them into varibles

let line1 = document.querySelector(".para1");

let input1 = document.getElementById("press");
let input2 = document.getElementById("press2");

// 
// 
//  Adding Event Listener and Arrow Function
// 
//  

 input1.addEventListener("keydown", function downpress(){
    alert("Yes! Key is pressed.")
})

input2.addEventListener("keyup",function uppress(){
    alert("Yeah! Key is released.")
})