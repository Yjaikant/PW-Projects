// JavaScript Code for Banking Application //
let customer = {
    name : "Jai Kant Yadav",
    balance : 2000,
  }
  
  // Functio for depositing amount//
  function deposit(amount){
    if(amount > 0){
      customer.balance += amount;
      return `New Balance : ${customer.balance}`
    }else{
     return "Deposit Amount must be greater than '0'"
    }
  }
  
  // Function for widthrawal //
  function widthraw(amount){
    if(amount > 0 && amount <= customer.balance){
      customer.balance -= amount;
      return `New Balance : ${customer.balance}`
    }else if( amount < 0) {
      return "Widthraw amount must be greater than '0' "
    }else{
      return "Insufficient Funds"
    }
  }
  console.log(deposit(100));// 2100
  console.log(deposit(1000));//3100
  console.log(deposit(500));// 3600
  
  console.log(widthraw(100));// 3500
  console.log(widthraw(1000));// 2500
  
  