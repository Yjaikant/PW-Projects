// First of all getting all the elements and storing them into varibles

let line1 = document.querySelector(".para1");

let line2 = document.getElementById("demo");

let submit = document.getElementById("btn");

let erase = document.getElementById("eraseBtn");
// 
// 
//  Adding Event Listener and Arrow Function
// 
//  
// button for inserting text
btn.onclick = () => {
    line2.innerText = "an Aspiring Developer"
}

// button for deleting edited text
erase.onclick = () => {
    line2.innerText = "";
}
