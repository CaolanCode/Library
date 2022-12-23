let myLibrary = [];

function Book(title, author, pages, read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book){
  myLibrary.push(book);
}

const book1 = new Book("Atomic Habits", "James Clear", 320, "yes");
addBookToLibrary(book1);
console.log(myLibrary[0]);
const book2 = new Book("The Thursday Murder Club", "Richard Osman", 400, "no");
addBookToLibrary(book2);
console.log(myLibrary[1]);
const book3 = new Book("The Bullet that missed", "Richard Osman", 432, "no");
addBookToLibrary(book3);
console.log(myLibrary[2]);

const libraryContainer = document.querySelector(".library-container");
const bookContainer = document.createElement("div");
bookContainer.classList.add('bookContainer');
bookContainer.textContent = `${book1.title}, ${book1.author}, ${book1.pages}, ${book1.read}`;
libraryContainer.appendChild(bookContainer);