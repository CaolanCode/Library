let library = [];

function Book(title, author, pages, read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book){
  library.push(book);
}

const book1 = new Book("Atomic Habits", "James Clear", 320, "yes");
addBookToLibrary(book1);
console.log(library[0]);
const book2 = new Book("The Thursday Murder Club", "Richard Osman", 400, "no");
addBookToLibrary(book2);
console.log(library[1]);
const book3 = new Book("The Bullet that missed", "Richard Osman", 432, "no");
addBookToLibrary(book3);
console.log(library[2]);


for(let book in library){
  const libraryContainer = document.getElementById('libraryContainer');
  const bookContainer = document.createElement('div');
  bookContainer.classList.add('bookContainer')
  const title = document.createElement('p');
  const author = document.createElement('p');
  const pages = document.createElement('p');
  const read = document.createElement('p');
  title.textContent = `Title: ${library[book].title}`;
  author.textContent = `Author: ${library[book].author}`;
  pages.textContent = `Pages: ${library[book].pages}`;
  read.textContent = `Have I read this book: ${library[book].read}`;
  bookContainer.appendChild(title);
  bookContainer.appendChild(author);
  bookContainer.appendChild(pages);
  bookContainer.appendChild(read);
  libraryContainer.appendChild(bookContainer);

}



