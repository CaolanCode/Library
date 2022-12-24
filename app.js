let library = [];

class Book{
  constructor(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
  addBookToLibrary(){
    this.title = document.getElementById('titleInput').value;
    this.author = document.getElementById('authorInput').value;
    this.pages = document.getElementById('pagesInput').value;
    this.read = document.getElementById('readInput').value;
    library.push(book);
    console.log(library[0]);    
  }
  updateScreen(){
    for(let book in library){
      const bookContainer = document.createElement('div');
      bookContainer.classList.add('bookContainer')
      const titleBox = document.createElement('p');
      const authorBox = document.createElement('p');
      const pagesBox = document.createElement('p');
      const readBox = document.createElement('p');
      titleBox.textContent = `Title: ${library[book].title}`;
      authorBox.textContent = `Author: ${library[book].author}`;
      pagesBox.textContent = `Pages: ${library[book].pages}`;
      readBox.textContent = `Have I read this book?: ${library[book].read}`;
      bookContainer.appendChild(titleBox);
      bookContainer.appendChild(authorBox);
      bookContainer.appendChild(pagesBox);
      bookContainer.appendChild(readBox);
      libraryContainer.appendChild(bookContainer);
    }
  }
  createForm(){
    const form = document.createElement('form');
    form.classList.add('form');
    form.setAttribute('onsubmit', 'return false');
    const titleLabel = document.createElement('label');
    titleLabel.htmlFor = 'titleInput';
    titleLabel.textContent = "Title: ";
    const titleInput = document.createElement('input');
    titleInput.type = "text";
    titleInput.name = "titleInput";
    titleInput.setAttribute('id', 'titleInput');
    const authorLabel = document.createElement('label');
    authorLabel.htmlFor = 'authorInput';
    authorLabel.textContent = "Author: ";
    const authorInput = document.createElement('input');
    authorInput.type = "text";
    authorInput.name = "authorInput";
    authorInput.setAttribute('id', 'authorInput');
    const pagesLabel = document.createElement('label');
    pagesLabel.htmlFor = 'pagesInput';
    pagesLabel.textContent = "Pages: ";
    const pagesInput = document.createElement('input');
    pagesInput.type = "number";
    pagesInput.name = "pagesInput";
    pagesInput.setAttribute('id', 'pagesInput');
    const readLabel = document.createElement('label');
    readLabel.htmlFor = 'readInput';
    readLabel.textContent = "Read: ";
    const readInput = document.createElement('input');
    readInput.type = "text";
    readInput.name = "readInput";
    readInput.setAttribute('id', 'readInput');
    readInput.placeholder = " Have I read this Book?"
    const submitButton = document.createElement('button');
    submitButton.type = "submit";
    submitButton.textContent = "Submit";
    submitButton.setAttribute('id', 'submitButton')
    const resetButton = document.createElement('button');
    resetButton.type = "reset";
    resetButton.textContent = "Clear"
    resetButton.setAttribute('id', 'clearButton')
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
}

const book = new Book("Uknown", "Unknown", 0, "No");
const libraryContainer = document.getElementById('libraryContainer');
const body = document.body;

const newBookButton = document.getElementById('newBookButton');
newBookButton.addEventListener('click', book.createForm);

const submitButton = document.getElementById('submitButton');
if(submitButton){
  submitButton.addEventListener('click', book.addBookToLibrary);
  console.log("Submit button listener");
}






