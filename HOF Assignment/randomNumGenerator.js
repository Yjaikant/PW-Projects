
let delay = 3;

function countDown(){
    if(delay > 0){
        console.log(`Time Remaining to Generate a Randon Number : ${delay} Sec`);
        delay--;
    }else{
        clearInterval(countDownInterval)
        genRandomNumber();
    }
}

function genRandomNumber(){
    let randomNumber = Math.floor(Math.random()*100+1);

    console.log(`Random Number : ${randomNumber}`);
}

console.log(`Delaying for ${delay} Seconds...`)

let countDownInterval = setInterval(countDown,1000);
