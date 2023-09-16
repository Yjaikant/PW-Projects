// JavaScript Program for Min and Max Values //
// FUNCTION FOR MINIMUM AND MAXIMUM VALUE IN AN ARRAY
function minMax(arr){
    // USING SPREAD OPERATOR TO SPREAD ELEMENTS OF AN ARRAY.
    return `Min : ${Math.min(...arr)}
Max : ${Math.max(...arr)}`
}
// DEFINING AN ARRAY WITHT RANDOM VALUES OR ELEMENTS.
let array = [3,5,6,89,2,45,45,34]

console.log(minMax(array))

//OUTPUT : MIN : 2 AND MAX : 89;