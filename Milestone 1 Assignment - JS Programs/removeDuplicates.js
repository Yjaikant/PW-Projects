// JavaScript Program for removing Duplicates //

let  cart = [1,2,3,1,2,1,2,3,4,5,1] ;

 cart = cart.sort();// it will sort the array in increasing order [1,1,1,1,2,2,2,3,3,4,5]

let unique = [] ;// An empty array where we can push elements

for (let i = 0; i < cart.length; i++) { // iterating over an array
        if(cart[i] !== cart[i+1]){// Checking wheather 1st and its next elements matches or not... if it doesn't matches than below code will push it in an empty array.
        unique.push(cart[i]);
        }else {
          continue; // if it matches then it will not push instead it will skip it.
        
      }
}
console.log(unique)// printing the array.
