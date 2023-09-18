// JavaScript Program for Type conversion //
function convertToNumber(str){
    try{
        let num = Number(str);
        if(isNaN(num)){
            throw new Error("Invalid Number");//"THROW" STATEMENT STATES USER DEFINED EXCEPTION. EXECUTION OF FUNCTION WILL STOP AND THE ACTION WILL BE PASSED ON FIRST CATCH! 
        }
        return num;// IF A STRING CAN BE CONVERTED TO A NUMBER THAN IT WILL RETURN NUMBER ITSELF.
    }catch(error){
        return error.message;
    }
}

let x = convertToNumber("834");
let y = convertToNumber("jgkf");

console.log(x);
console.log(y);
console.log(convertToNumber("34yu"));

