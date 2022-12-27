function Book(title, author, pages, read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
function addBookToLibrary(){
  const titleInput = document.getElementById('titleInput').value;
  const authorInput = document.getElementById('authorInput').value;
  const pagesInput = document.getElementById('pagesInput').value;
  let read = false;
  if(document.getElementById('readInput').checked){
    read = true;
  } else {
    read = false;
  }
  const book = new Book(titleInput, authorInput, pagesInput, read);
  library.push(book);  
  displayLibrary();
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
  form.style.visibility = 'visible';
}
function exitForm(){
  form.style.visibility = 'hidden';
}

const library = [];
const libraryContainer = document.getElementById('libraryContainer');

// form
const form = document.getElementById('form');
const newBookButton = document.getElementById('newBookButton');
newBookButton.addEventListener('click', displayForm);
const exitButton = document.getElementById('exitButton');
exitButton.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(e)
  exitForm();
})
const submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(e)
  addBookToLibrary();
})


