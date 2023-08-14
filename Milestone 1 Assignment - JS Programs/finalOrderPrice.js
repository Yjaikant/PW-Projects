// JavaScript Program for calculating the final order price. //
// let take an example of array of objects with random values //
const customerCart = [
    {unitPrice : 20, quantity : 6},
    {unitPrice : 120, quantity : 2},
    {unitPrice : 220, quantity : 1},
    {unitPrice : 60, quantity : 4},
    {unitPrice : 70, quantity : 3},
];

let total = (e)=>{
    let TotalBill = 0;
    for(let i = 0 ; i < customerCart.length ; i++){// this loop traverse on customerCart array of objects//
        let eachItemPrice = e[i].unitPrice * e[i].quantity;// this is the total cost of each item.
         TotalBill = TotalBill + eachItemPrice; // this will calculate the TotalBill of the cart.
    }
    console.log(`Rs ${TotalBill}`);// OutPut will be : Rs 1030

}
total(customerCart);// here we are invoking the arrow function and passing the array of objects.


