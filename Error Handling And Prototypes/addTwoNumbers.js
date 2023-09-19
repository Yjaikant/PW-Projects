// JS program for using static method to add two numbers //

class Calculator{
    static add(num1,num2){
        return num1+num2;
    }
}
// DEFINED WAY TO CALL STATIC METHOD IN A CALSS IS "Calculator.add()" i.e CLASSNAME.STATICMETHODNAME()
let result1 = Calculator.add(4,8);
let result2 = Calculator.add(6,18);

console.log(result1);//12
console.log(result2);//24
