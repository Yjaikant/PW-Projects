// JS Program for Arranging in Alphabetical Order //
// DEFINING THE ARRAY OF OBJECTS //
const Books = [
    {
      title: "The Da Vinci Code",
      author: "Dan Brown",
      year: 2003,
    },
    {
      title: "Brave New World",
      author: "Aldous Huxley",
      year: 1932,
    },
    {
      title: "Lord of the Rings: The Fellowship of the Ring",
      author: "J.R.R. Tolkien",
      year: 1954,
    },
    {
      title: "Alchemist",
      author: "Paulo Coelho",
      year: 1988,
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      year: 1813,
    },
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      year: 1951,
    },
    {
      title: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
      year: 1997,
    },
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      year: 1937,
    },
    {
      title: "To the Lighthouse",
      author: "Virginia Woolf",
      year: 1927,
    },
  ];
  
  //FUNCTION FOR EXTRACTING BOOKS TITLES
  function takeOutTitles(books, callback) {
    let titles = books.map((book) => book.title);
    return callback(titles);
  }
  // CALLBACK FUNCTION DEFINING AND LOGGING THE RESULT
  function logTitles(titles) {
    titles.sort();
    console.log(titles.join("\n"));
  }
  
  // EXPECTED OUTPUT: 
  takeOutTitles(Books, logTitles);
  
  // Alchemist
  // Brave New World
  // Harry Potter and the Sorcerer's Stone
  // Lord of the Rings: The Fellowship of the Ring
  // Pride and Prejudice
  // The Catcher in the Rye
  // The Da Vinci Code
  // The Hobbit
  // To the Lighthouse