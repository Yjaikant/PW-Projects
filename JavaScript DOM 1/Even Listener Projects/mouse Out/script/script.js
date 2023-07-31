// First of all getting all the elements and storing them into varibles

let line1 = document.querySelector(".para1");

let line2 = document.getElementById("demo");

let submit = document.getElementById("btn");

let color = document.getElementById("changeColor");

// 
// 
//  Adding Event Listener and Arrow Function
// 
//  
// button for inserting text
btn.onclick = () => {
    line2.innerText = "an Aspiring Developer"
}

// Mouse over for changing color

color.onmouseover = () => {
    line1.style.color = "Red"
}

//  Mouse out for changing color to default

color.onmouseout = () => {
    line1.style.color = "Black"
}