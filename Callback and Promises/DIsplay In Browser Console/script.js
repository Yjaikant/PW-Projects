// JS Program for Displaying result on browser console //
// HERE FETCH WILL ALWAYS RETURNS A PROMISE WITH RESOLVE AND REJECT PARAMETERS WHICH AFAIN RETURNS A PROMISE HANDLED BY THEN() AND CATCH().
fetch("https://jsonplaceholder.typicode.com/posts").then((response,reject) =>{
  return response.json();
}).then((data)=>{
  console.log(data)
}).catch((error) => {
  console.log("Can't fetch data!")
})