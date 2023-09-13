// JavaScript Program for Exchanging the Rate of US dollars to INR //

let exchangeRate = 80 ;//DEFINING THE EXCHANGE RATE//
//CREATING THE CART OBJECT
let cart = {
  item1 : 20, 
  item2 : 30, 
  item3 : 50, 
  item4 : 10, 
  
}
// CREATING EMPTY OBJECT FOR CONVERTED PRICES
let toINR = {};
// OBJECT.KEYS GIVES AN ARRAY OF ITEMS AND THEN WE USES MAP() METHOD TO ITERATE OVER AN ARRAY. THEN WE STORE THE RESULT AFTER MULTIPLYING BY EXCHANGE RATE WITH THE KEY'S VALUES.
Object.keys(cart).map((key)=>{
  toINR[key] = exchangeRate * cart[key];
});

//PRINTING IT IN CONSOLE
console.log(toINR)
// OUTPUT : { item1: 800, item2: 2000, item3: 400 }
