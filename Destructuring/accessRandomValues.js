// JavaScript Program for Accessing random elements of an array //
//DEFINING AN ARRAY WITH ELEMENTS
let arr = [1,2,3,4,5,6,7,8,9,10,11]
//DEFINING FUNCTION FOR EXTRACTING FIRST,SECOND AND LAST ELEMENT
function extract(inputArr){
    //USING ARRAY METHOD ARR.POP() TO EXTRACT LAST ELEMENT
    let last = inputArr.pop();

    return [arr[0],arr[1],last];
}
//PRINITNG THE RESULT
console.log(extract(arr))
