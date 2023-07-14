const Book = require("./Book.js");
const Library = require("./Library.js");

const library = new Library('Malta Library', 'Art Street');
const harryPotter = new Book('Harry Potter', 'J.K. Rowling', 208, 'Rocco');
const lordOfRings = new Book('Lord of Rings', 'J. R. R. Tolkien', 1178, 'Rocco');
library.addBook(harryPotter);
library.addBook(lordOfRings);
const searchBook = library.searchBook('Lord of Rings');
console.log(searchBook);
library.listBooks();
console.log(library.removeBook("Lord of Rings"));
library.listBooks();