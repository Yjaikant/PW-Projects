// JavaScript Program for Generating Random Numbers //

let delay = 3;
// Message that displays total seconds in delay //
console.log(`Delaying for ${delay} Seconds...`)

let intervalID = setInterval(countDown,1000);// Creating Interval ID

function countDown(){// defining countDown() function
    if(delay > 0){
        console.log(`Time Remaining to Generate a Randon Number : ${delay} Sec`);
        delay--;// decrementing...
    }else{
        clearInterval(intervalID)// In clearInterval function we have to add interval ID to it. 
        genRandomNumber();
    }
}

function genRandomNumber(){// defining genRandomNumber() function
    let randomNumber = Math.floor(Math.random()*100+1);

    console.log(`Random Number : ${randomNumber}`);
}


