//  JavaScript Program for checking divisibility of numbers given in an array by 3.

let arr = [4,21,54,61,32,45,22,97,235];// We have taken random numbers inside an array for testing purposes
let len = arr.length;
for(let i = 0 ; i <= len ; i++){
    if(arr[i]%3 === 0){
        console.log(arr[i]); // Output : 21,54,45
    }else{
        continue;// if a number is not divisibile by 3 then it will skip
    }
}