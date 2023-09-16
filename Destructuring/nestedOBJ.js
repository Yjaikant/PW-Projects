// JavaScript Program fro Nested Objects //
const person = {
    name: "Mithun",
    age: 21,
    address: {
      street: "B8, Block B, Industrial Area.",
      city: "Sector 62, Noida",
      state: "Uttar Pradesh",
    },
  };

  function extractData(object){
    let {name,address:{street},} = object;
    return {name,street};
  }

  console.log(extractData(person));