// Logic for Counter App //

// First lets get elements with tier Id's

let Decrement = document.getElementById("decrementBtn");
let Reset = document.getElementById("reset");
let Increment = document.getElementById("incrementBtn");

// Where to display?

let Value = document.getElementById("value");

// Adding Event Listener and Defining functions for them.

let count = 0;
Decrement.onclick = () => {
    count--;
    Value.innerHTML = count;
}

Reset.onclick = () => {
    count = 0;
    Value.innerText = count;
}

Increment.onclick = () => {
    count++;
    Value.innerText = count;
}