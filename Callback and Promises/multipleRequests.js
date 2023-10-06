// JS Program for Multiple Requests //

// HERE WE WILL CREATE A ASYNC FUNCTION WITH THE NAME OG MULTIPLEREQUESTS(). WE FETCH DATA FRO TWO API'S WHICH WILL GIVE A PROMISES. 
async function multipleRequests() {
    //HERE WE WILL USE AWAIT IN ASYNC FUNCTION MEANS PROCESS WILL WAIT TILL DATA1 GETS FETCHED FROM THE FIRST API. THEN IT WILL GO AHEAD FOR THE SECOND ONE !
    const data1 = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    )//FETCH RETURNS A PROMISE AND IS HANDLED BY THEN AND CATCH
    .then((response) => response.json());
  
    const data2 = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    ).then((response) => response.json());
  // DEFINING NEW OBJECT WITH THE NAME OF JOININGDATA THAT WILL HAVE TO-DO AND POST AS PROPERTIES.
    const joiningData= {
      todo: data1,
      post: data2,
    };
  //LOGGING THE OUTPUT
    console.log(joiningData);
  }
  // CALLING THE ASYNC FUNCTON
  multipleRequests();
  