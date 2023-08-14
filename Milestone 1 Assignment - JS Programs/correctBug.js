// JavaScript Program for correcting a bug 

// let's take an array with the name quantity that represents us the no. of items in the cart which has got halfed.

let halfQuantity = [1,3,0.5,2,4];
let len = halfQuantity.length;

let fullQuantity = [];
for(let i = 0 ; i < len ; i++){
     full = halfQuantity[i]*2 // here half quantity items will get doubled
    fullQuantity.push(full);
}
console.log(fullQuantity) // Output : [ 2, 6, 1, 4, 8]