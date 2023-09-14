// JavaScript Program for filtering and capitalizing Authors Name. //


// FIRST CREATING THE ARRAY OF OBJECTS OF BOOKS AND ITS AUTHORS //
let books = [
  {
    title: "Book 1",
    author: "author 1",
    publicationYear: 2005,
  },
  {
    title: "Book 2",
    author: "author 2",
    publicationYear: 2012,
  },
           {
    title: "Book 3",
    author: "author 3",
    publicationYear: 2015,
  },
  {
    title: "Book 4",
  author: "author 4",
  publicationYear: 2002
},
{
    title: "Book 5",
    author: "author 5",
    publicationYear: 2025
},
];

// CREATING AN EMPTY ARRAY TO STORE FILTERED BOOKS
 let filteredBooks = [];

 // LOGIC FOR FILTERING AND CAPITALIZING BOOKS LIST!

 for(let i = 0; i <books.length; i++){
    if(books[i].publicationYear >=2010){
        filteredBooks.push({
            title: books[i].title,
            author: books[i].author.toUpperCase(),
            publicationYear: books[i].publicationYear
        })
    }
 }

 console.log(filteredBooks)

