function Library(library = []){
  this.library = library;
}
Library.prototype.add = function addBookToLibrary(book){
  this.library.push(book);
  console.log(this.library);
}
Library.prototype.remove = function removeBookFromLibrary(index){
  this.library.splice(index, 1);
}
Library.prototype.displayLibrary = function displayLibrary(){
  createDisplay(this.library);
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
  } else {
    read = false;
  }
  const book = new Book(titleInput, authorInput, pagesInput, read);
  library.add(book);  
  library.displayLibrary();
  exitForm();
}
function createDisplay(library){
  libraryContainer.innerHTML = "";
  for(let item in library){
    const bookContainer = document.createElement('div');
    bookContainer.classList.add('book-container')
    const titleBox = document.createElement('p');
    const authorBox = document.createElement('p');
    const pagesBox = document.createElement('p');
    const readBox = document.createElement('p');
    titleBox.textContent = `Title: ${library[item].title}`;
    authorBox.textContent = `Author: ${library[item].author}`;
    pagesBox.textContent = `Pages: ${library[item].pages}`;
    readBox.textContent = `Have I read this book?: ${library[item].read}`;
    const removeButton = document.createElement('button');
    removeButton.classList.add('remove-button');
    removeButton.innerHTML = "Remove"
    removeButton.dataset.index = item;
    removeButton.setAttribute('type', 'button');
    removeButton.addEventListener('click', removeBook);
    const readButton = document.createElement('button');
    readButton.setAttribute('type', 'button');
    readButton.classList.add('read-button');
    bookContainer.appendChild(titleBox);
    bookContainer.appendChild(authorBox);
    bookContainer.appendChild(pagesBox);
    bookContainer.appendChild(readBox);
    bookContainer.appendChild(removeButton);
    libraryContainer.appendChild(bookContainer);
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
  const index = event.target.getAttribute('data-index');
  library.remove(index);
  library.displayLibrary();
}

const library = new Library();
const libraryContainer = document.getElementById('library-container');

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
