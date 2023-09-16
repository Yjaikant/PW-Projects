// JavaScript Program for Counting the occurances of the alphabets! // 
// WE WILL TAKE A STRING WITH REPEATING ALPHABETS.
let article = "a a a a b b b c c c d d d d d d e e e e e f f f f f g h h i j k k k k l l l"

// HERE WE WILL START A FUNCTION THAT DEFINES A LOGIC OF THIS PROGRAM.
    function countOccurances(){
        let words = article.split(" ");// SPLIT WILL CONVERT STRING INTO AN ARRAY WITH SINGLE WHITE SPACE " ".
        let map = new Map(); // THIS IS A CONSTRUCTOR METHOD FOR CREATING MAP 

    for(let word of words){// FOR OF LOOP FOR ITERATING IN ARRAY
        if(map.has(word)){// THIS CHECKS IF A NEW MAP HAS "a" IN IT OR NOT
            map.set(word,map.get(word)+1)// IF "a" IS PRESENT THAN "A" => 1 WILL GET UPDATED;  
        }else{
            map.set(word,1)// IF "a" IS NOT PRESENT THEN THIS WILL SET "a" => 1;
        }
    }
    return map;
    }

    let x = countOccurances(article);
    console.log(x);
  

