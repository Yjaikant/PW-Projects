// JS Program to Fetch results Asynchronously //
// DEFINING A VARIABLE NAME FETCH DATA THAT TAKES AN ASYNC ARROW FUNCTION  AND RETURNS RESPOSE.JSON!
let fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    return response.json();
  };
  // AS ASYNC FUNCTION ALWAYS RETURNS A PROMISE SO WE WILL USE THEN() AND CATCH() METHOD!
  fetchData()
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log("error");
    });

    // EXPECTED RESULT//
//     {
//   "userId": 1,
//   "id": 1,
//   "title": "delectus aut autem",
//   "completed": false
// }

  