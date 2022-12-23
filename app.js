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
