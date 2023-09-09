

function changeRColor(){
   let colors = [
    "#FF5733",
    "#33FF57",
    "#5733FF",
    "#FF33A1",
    "#33A1FF",
    "#FFB733",
    "#33FFB7",
    "#B733FF",
    "#FF33B7",
    "#33B7FF",
    "#FF339F",
    "#339FFF",
    "#FF3D33",
    "#33FF3D",
    "#3D33FF",
    "#FF3D9F",
    "#3D9FFF",
    "#FFB733",
    "#33FFB7",
    "#B733FF"
];



    let colorRandom = Math.floor(Math.random()*colors.length);
    //here Math.random() will give random values between 0 to 1. Then we multiply with array length to get a number which is not greater than the length of given array.
    //Still output will contain decimal point, but we need pure integer to target an index of an array. We will use Math.floor().   
    
    let backgroundColorChange = document.getElementById("changeColor");
     // let newVar = array[index]//
    let randomColor = colors[colorRandom];
    // using DOM styling Methods//
    backgroundColorChange.style.backgroundColor=randomColor;
    console.log(colorRandom)
}