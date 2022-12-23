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

function updateScreen(){
  for(let book in library){
    const bookContainer = document.createElement('div');
    bookContainer.classList.add('bookContainer')
    const title = document.createElement('p');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const read = document.createElement('p');
    title.textContent = `Title: ${library[book].title}`;
    author.textContent = `Author: ${library[book].author}`;
    pages.textContent = `Pages: ${library[book].pages}`;
    read.textContent = `Have I read this book?: ${library[book].read}`;
    bookContainer.appendChild(title);
    bookContainer.appendChild(author);
    bookContainer.appendChild(pages);
    bookContainer.appendChild(read);
    libraryContainer.appendChild(bookContainer);
  }
}

function createForm(){
  const form = document.createElement('form');
  form.classList.add('form');
  const titleLabel = document.createElement('label');
  titleLabel.htmlFor = 'titleInput';
  titleLabel.textContent = "Title: ";
  const titleInput = document.createElement('input');
  titleInput.type = "text";
  titleInput.name = "titleInput";
  const authorLabel = document.createElement('label');
  authorLabel.htmlFor = 'authorInput';
  authorLabel.textContent = "Author: ";
  const authorInput = document.createElement('input');
  authorInput.type = "text";
  authorInput.name = "authorInput";
  const pagesLabel = document.createElement('label');
  pagesLabel.htmlFor = 'pagesInput';
  pagesLabel.textContent = "Pages: ";
  const pagesInput = document.createElement('input');
  pagesInput.type = "number";
  pagesInput.name = "pagesInput";
  const readLabel = document.createElement('label');
  readLabel.htmlFor = 'readInput';
  readLabel.textContent = "Read: ";
  const readInput = document.createElement('input');
  readInput.type = "text";
  readInput.name = "readInput";
  readInput.placeholder = " Have I read this Book?"
  const submitButton = document.createElement('button');
  submitButton.type = "submit";
  submitButton.textContent = "Submit";
  submitButton.classList.add('submitButton');
  const resetButton = document.createElement('button');
  resetButton.type = "reset";
  resetButton.textContent = "Clear"
  resetButton.classList.add('clearButton');
  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('buttonContainer');
  form.appendChild(titleLabel);
  form.appendChild(titleInput);
  form.appendChild(authorLabel);
  form.appendChild(authorInput);
  form.appendChild(pagesLabel);
  form.appendChild(pagesInput);
  form.appendChild(readLabel);
  form.appendChild(readInput);
  buttonContainer.appendChild(submitButton);
  buttonContainer.appendChild(resetButton);
  form.appendChild(buttonContainer);
  body.appendChild(form);
}

const libraryContainer = document.getElementById('libraryContainer');
const body = document.body;

const book1 = new Book("Atomic Habits", "James Clear", 320, "yes");
addBookToLibrary(book1);
const book2 = new Book("The Thursday Murder Club", "Richard Osman", 400, "no");
addBookToLibrary(book2);
const book3 = new Book("The Bullet that missed", "Richard Osman", 432, "no");
addBookToLibrary(book3);
updateScreen();

const newBookButton = document.getElementById('newBookButton');
newBookButton.addEventListener('click', createForm);






