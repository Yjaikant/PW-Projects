//  JavaScript Program for Color Mixer

let color1 = "red"; // You can replace color1 with red or blue
// and  can replace color2 with yellow or blue
let color2 = "blue";

switch (color1) {
  case "red":
    if (color2 == "yellow") {
      console.log("Orange");
    } else if (color2 == "blue") {
      console.log("Purple");
    } else {
      console.log("Invalid Color Combination"); // If any other color is the input, then it will print Invalid color combinations
    }
    break; // if color1 is red then compiler will not go ahead, else it wil.
  case "blue":
    if (color2 == "yellow") {
      console.log("Green");
    } else {
      console.log("Invalid Color Combination");
    }
}
