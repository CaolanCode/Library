function Book(title, author, pages, read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
function addBookToLibrary(book){
  library.push(book);  
}
function displayLibrary(){
  for(let item in library){
    const bookContainer = document.createElement('div');
    bookContainer.classList.add('bookContainer')
    const titleBox = document.createElement('p');
    const authorBox = document.createElement('p');
    const pagesBox = document.createElement('p');
    const readBox = document.createElement('p');
    titleBox.textContent = `Title: ${library[item].title}`;
    authorBox.textContent = `Author: ${library[item].author}`;
    pagesBox.textContent = `Pages: ${library[item].pages}`;
    readBox.textContent = `Have I read this book?: ${library[item].read}`;
    bookContainer.appendChild(titleBox);
    bookContainer.appendChild(authorBox);
    bookContainer.appendChild(pagesBox);
    bookContainer.appendChild(readBox);
    libraryContainer.appendChild(bookContainer);
  }
}
function displayForm(){
  const form = document.getElementById('form');
  form.style.visibility = 'visible';
}
function exitForm(){
  const form = document.getElementById('form');
  form.style.visibility = 'hidden';
}

const library = [];
const bookOne = new Book("The Bullet That Missed", "Richard Osman", 432, false);
const bookTwo = new Book("Atomic Habits", "James Clear", 320, true);
const bookThree = new Book("Thinking Fast and Slow", "Daniel Kahneman", 512, true);
const libraryContainer = document.getElementById('libraryContainer');

// form
const newBookButton = document.getElementById('newBookButton');
newBookButton.addEventListener('click', displayForm);
const exitButton = document.getElementById('exitButton');
exitButton.addEventListener('click', exitForm)

addBookToLibrary(bookOne);
addBookToLibrary(bookTwo);
addBookToLibrary(bookThree);
displayLibrary();

