// JS Program for Filtering out itmes as per selected category //
let products = [
    {name:"shirt", category:"clothing"},
    {name:"pant", category:"clothing"},
    {name:"Shoes", category:"clothing"},
    {name:"Hat", category:"Accessories"},
    {name:"Sunglasses", category:"Accessories"},
    {name:"Watch", category:"Accessories"},
  ];
  
  function filterByCategroy(products){
      return function(category){
        return products.filter(function (product){
          return product.category === category;
        })
      }
  }
  
  let clothingProducts = filterByCategroy(products)("Accessories")
  
  console.log(clothingProducts);
  