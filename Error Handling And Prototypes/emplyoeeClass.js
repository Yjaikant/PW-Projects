// JS program for Employee Class Challenge //

class Employee{
    constructor(name,position,salary){
        this.name = name;
        this.position = position;
        this.salary = salary;
    }

    getsalary(){
        return this.salary;
    }
}

let details1 = new Employee(
     "Hitesh Choudhary",
     "Web Developer",
         80000,
)
let details2 = new Employee(
     "Akansha Gurjar",
    "Web Developer",
     70000,
)

console.log(details1.getsalary());
console.log(details2.getsalary());
