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
  exitForm();
}
function displayLibrary(){
  libraryContainer.innerHTML = "";
  for(let item in library){
    const bookContainer = document.createElement('div');
    bookContainer.classList.add('bookContainer')
    const titleBox = document.createElement('p');
    const authorBox = document.createElement('p');
    const pagesBox = document.createElement('p');
    const readBox = document.createElement('p');
    const removeButton = document.createElement('button');
    removeButton.classList.add('removeButton');
    removeButton.innerHTML = "Remove"
    removeButton.dataset.index = item;
    removeButton.setAttribute('type', 'button');
    removeButton.addEventListener('click', removeBook);
    console.log(removeButton.className);
    console.log(removeButton.type);
    console.log(removeButton.dataset.index);
    titleBox.textContent = `Title: ${library[item].title}`;
    authorBox.textContent = `Author: ${library[item].author}`;
    pagesBox.textContent = `Pages: ${library[item].pages}`;
    readBox.textContent = `Have I read this book?: ${library[item].read}`;
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
  document.getElementById('titleInput').value = "";
  document.getElementById('authorInput').value = "";
  document.getElementById('pagesInput').value = "";
  document.getElementById('readInput').checked = false;
}
function removeBook(event){
  const index = event.target.getAttribute('data-index');
  console.log("remove index" + index)
  library.splice(index, 1);
  displayLibrary();
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
  exitForm();
})
const submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  addBookToLibrary();
})
