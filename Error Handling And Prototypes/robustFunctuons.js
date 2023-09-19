// Program for robust functions in JavaScript //
//HERE WE WILL BE COMPAIRING GIVEN PARAMETER IF IT IS AN OBJECT OR NOT BY USING TYPE OF AND LATER WE WILL USE OBJECT METHOD "hasOwnProperty" TO CHECK IF AN OBJECT HAS NAME OR AGE PROPERTY IN IT OR NOT. IF IT HAS THEN IT WILL RETURN TRUE ELSE IT WILL RETURN FALSE.
function getPerson(person){
    try{
        if(typeof person !== "object" && !person.hasOwnProperty("name" && "age") ){
            throw new Error ("Invalid Parameter Type")
        }return `Name: ${this.name}, Age: ${this.age};`
    }catch(error){
        return error.message;
    }
}

let obj1 = {
    name: "Sasha Greyen",
    age: 25,
}
let obj2 = {
    name: "Mia Malkovaa",
    age: 31,
}

console.log(obj1);
console.log(obj2);