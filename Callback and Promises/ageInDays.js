// JS Program for Age in Days //
// DEFINING OBJECT
let details = {
    firstName : "Ram",
    lastName : "Suryavanshi",
    age : "25"
}
// DEFINING THE MAIN FUNCTION //
function ageInDays(personDetails,callback){
    let fullName = `${personDetails.firstName} ${personDetails.lastName}`
    let personAgeInDays = (personDetails.age*365);
    return callback(fullName,personAgeInDays);        
}
// DEFINING THE CALLBACK FUNCTION! 
function logResult(fullName,personAgeInDays){
    let result = `The persons's full name is ${fullName} and their age in days in ${personAgeInDays}.`
    console.log(result);
}

// EXPECTED OUTPUT : 
ageInDays(details,logResult)
// The person's full name is Ram Suryavanshi and their age in days is 9125.

