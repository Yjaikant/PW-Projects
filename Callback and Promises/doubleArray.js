// Function for Double using callback //
//MAIN FUNCTION THAT TAKES ARRAY AND CALLBACK FUNCTION AS AN ARGUMENT
function doubleCallback (arr,callback){
    let twiceArray = arr.map((num)=>{
            return callback(num)
    })
    return twiceArray;
}
// DEFINING CALLBACK FUNCTION 
function callback (num){
    return num*2;
}
// ARRAY THAT IS AN ARGUMENT OF A DOUBLECALLBACK FUNCTION
let netArray = [1,2,3,4,5,6]
// CALLING DOUBLECALLBACK FUNCTION
let doubledArray = doubleCallback(netArray,callback);
//PRINTING THE RESULT!
console.log(doubledArray);


