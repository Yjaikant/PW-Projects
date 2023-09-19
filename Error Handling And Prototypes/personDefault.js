// JS Program for Person's default values //

class person{
    //WE ASSIGN DEFAULT VALUES IN THE CONSTRUCTOR PARAMETER
    constructor(name = unknown, age = 0){
        this.name = name;
        this.age = age;
    }

    getDetails(){
        return `Name: ${this.name}, Age: ${this.age}`
    }
}

let detials1 = new person("Jai Kant Yadav", 25);
let detials2 = new person("Chandra Kant Yadav", 28);

console.log(detials1.getDetails());
console.log(detials2.getDetails());

