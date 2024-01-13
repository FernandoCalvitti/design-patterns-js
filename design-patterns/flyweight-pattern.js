/* 
The flyweight pattern is a useful way to conserve memory when we are creating a large number of similar objects

In this example we will think about a library:

All books will have a "title", "author", "isbn"

There can be multiple copies of the same book, for that reason:

Would not be very useful to create a new Book instance if the book that we need to add the list already exists,

The type of book already is created. We must check if it exists or not.

*/

class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

const books = new Set();

const createBook = (title, author, isbn) => {
  const existingBook = books.has(isbn);

  if (existingBook) {
    return books;
  }

  const book = new Book(title, author, isbn);
  books.add(isbn);

  return book;
};

/* 
 
 createBook fn allows us to create new types of books and add them to the Map.

 Now we can have a fn to add them to a list of books availables

*/

const bookList = [];

const addBook = (title, author, isbn, availability, sales) => {
  const book = {
    ...createBook(title, author, isbn),
    isbn,
    availability,
    sales,
  };

  bookList.push(book);
  return book;
};

/* 

Now we are allowed to create only new types of Books, and if the Book already exists, instead create a copy of it.

*/

addBook("Martin Fierro", "J. Hernandez", "AAA000", true, 10);
addBook("Martin Fierro", "J. Hernandez", "AAA000", true, 10);
addBook("Rayuela", "Cortázar", "AAA001", false, 2);
addBook("Rayuela", "Cortázar", "AAA001", false, 2);
addBook("Los Miserables", "?", "AAA002", true, 2);

console.log("Total copies: ", bookList.length);
console.log("Total books: ", books.size);
