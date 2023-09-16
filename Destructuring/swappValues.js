// JavaScript Program for swapping values // 

// HERE WE WILL WRTIE A LOGIC FOR SWAPPING FUNCTION
function swapValues(a,b){
    [a,b]=[b,a];
    return [a,b]
}

// HERE WE WILL ASSIGN VALUES TO X AND Y AND USE THE CONCEPT OF DESTRUCTURING FOR SWAPPING
let x = 1;
let y = 4;
// DESTRUCTURING...
[x,y]=swapValues(x,y);
//PRINTING THE RESULT
console.log([x,y]);
//We used square brackets[] to keep values inside an array as we needed array in result.

