// JS Program for Car Description Class //
// MAKING A CLASS WITH A NAME CAR. THEN MAKING CONTRUCTOR METHOD WHICH GET CALLED WE MAKE NEW OBJECT AND THEN CALL IT.
// LATER WE ADDED getdesciption METHOD THAT RETURN A STRING VALUE DESCRIBING ABOUT A CAR.
class car{
    constructor(company,model,year){
        this.year = year;
        this.model = model;
        this.company = company;
    }

    getDescription(){
        return `This is a ${this.year} ${this.company} ${this.model}`
    }
}

let vehicle1 = new car("Skoda", "rapid", 2022);
let vehicle2 = new car("Maruti", "Baleno", 2022);
let vehicle3 = new car("Hyundai", "i20 Asta", 2022);
let vehicle4 = new car("MG", "Hector", 2022);

let details1 = vehicle1.getDescription();
let details2 = vehicle2.getDescription();
let details3 = vehicle3.getDescription();
let details4 = vehicle4.getDescription();

console.log(details1);
console.log(details2);
console.log(details3);
console.log(details4);