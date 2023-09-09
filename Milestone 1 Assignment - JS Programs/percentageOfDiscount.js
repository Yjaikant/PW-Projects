// JavaScript Code For Calculating the precentage of the Discount //
let netPrice = (OrPrice,discount) => {
    return (OrPrice - (OrPrice * (discount/100)))
  }
  let discountedPrice = netPrice(1000,10);  
  console.log(discountedPrice);// Ouput will be 900 Rupees.

  