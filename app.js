function Library(books = []){
  this.books = books;
}
Library.prototype.add = function addBookToLibrary(book){
  this.books.push(book);
}
Library.prototype.remove = function removeBookFromLibrary(index){
  this.books.splice(index, 1);
}
Library.prototype.displayLibrary = function displayLibrary(){
  createDisplay(this.books);
}
function Book(title, author, pages, read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
function getBookData(){
  const titleInput = document.getElementById('title-input').value;
  const authorInput = document.getElementById('author-input').value;
  const pagesInput = document.getElementById('pages-input').value;
  let read = false;
  if(document.getElementById('read-input').checked){
    read = true;
  }
  const book = new Book(titleInput, authorInput, pagesInput, read);
  library.add(book);  
  library.displayLibrary();
  exitForm();
}

const library = new Library();
const libraryContainer = document.getElementById('library-container');

function createDisplay(books){
  libraryContainer.innerHTML = "";
  for(let book in books){
    const bookContainer = document.createElement('div');
    bookContainer.classList.add('book-container')
    bookContainer.dataset.index = book;
    const titleBox = document.createElement('p');
    const authorBox = document.createElement('p');
    const pagesBox = document.createElement('p');
    titleBox.textContent = `Title: ${books[book].title}`;
    authorBox.textContent = `Author: ${books[book].author}`;
    pagesBox.textContent = `Pages: ${books[book].pages}`;
    const removeButton = document.createElement('button');
    removeButton.classList.add('remove-button');
    removeButton.innerHTML = "Remove"
    removeButton.setAttribute('type', 'button');
    removeButton.addEventListener('click', removeBook);
    const readButton = document.createElement('button');
    readButton.setAttribute('type', 'button');
    readButton.classList.add('read-button');
    readButton.addEventListener('click', changeBookStatus);
    if(books[book].read === true){
      readButton.textContent = "Read";
      readButton.classList.add('book-is-read');
    } else{
      readButton.textContent = "Not Read";
    }
    bookContainer.appendChild(titleBox);
    bookContainer.appendChild(authorBox);
    bookContainer.appendChild(pagesBox);
    bookContainer.appendChild(removeButton);
    bookContainer.appendChild(readButton);
    libraryContainer.appendChild(bookContainer);
  }
}
function changeBookStatus(event){
  const index = event.target.parentElement.getAttribute('data-index');
  event.target.classList.toggle('book-is-read');
  if(library.books[index].read === true){
    library.books[index].read = false;
    event.target.textContent = "Not read";
  } else{
    library.books[index].read = true;
    event.target.textContent = "Read";
  }
}
function displayForm(){
  form.style.visibility = 'visible';
}
function exitForm(){
  form.style.visibility = 'hidden';
  document.getElementById('title-input').value = "";
  document.getElementById('author-input').value = "";
  document.getElementById('pages-input').value = "";
  document.getElementById('read-input').checked = false;
}
function removeBook(event){
  const index = event.target.parentElement.getAttribute('data-index');
  library.remove(index);
  library.displayLibrary();
}


// form
const form = document.getElementById('form');
const newBookButton = document.getElementById('new-book-button');
newBookButton.addEventListener('click', displayForm);
const exitButton = document.getElementById('exit-button');
exitButton.addEventListener('click', (e) => {
  e.preventDefault();
  exitForm();
})
const submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  getBookData();
})
