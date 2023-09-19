// JS Program for adding prototype method in object // 
function Student(name){
    this.name = name;
  }
  
  Student.prototype.printDetails = function(){
    console.log(`Hello, my name is ${this.name}.`)
  }
  
  let detials = new Student("Jai");
  
  detials.printDetails();