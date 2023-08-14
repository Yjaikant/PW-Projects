// JavaScript Program for Calculating Rental Cost //

let  economy = 4000;  /* Declaring all the varibles in global scope*/
let  midsize = 10000;
let  luxury = 20000;
function rentalCost(days, type){// here function will take input in two parameters, one is no. of days and second is type car rented.
if(type === economy){
  total = days * economy;//  Rs 4000
}else if( type === midsize){
  total = days * midsize;//  Rs 10,000
}else{
  total = days * luxury;//  Rs 20,000
}
return total;
}

let final = rentalCost(5,luxury)//function invoked with two arguments.
console.log(final)