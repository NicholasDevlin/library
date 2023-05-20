// construct
let myLibrary = [];

function Book(title, author, read) {
  this.title = title;
  this.author = author;
  this.read = read;
}

Book.prototype.toggleRead = function () {
  this.read = !this.read;
}

function toggleRead(index) {
  myLibrary[index].toggleRead();
  display();
}

// add book ui
const btnAddBook = document.getElementById('btnAddBook')
const bookForm = document.getElementById('bookForm')
const overlay = document.getElementById('overlay')
const form = document.getElementById('addBookForm')
const btnSubmit = document.getElementById('submit')
let table = document.getElementById('tableContent')

const addNewBook = () => {
  bookForm.classList.add('active')
  overlay.classList.add('active')
}

const closeForm = () => {
  bookForm.classList.remove('active')
  overlay.classList.remove('active')
}

const clearForm = () => {
  form.reset()
}

btnAddBook.onclick = addNewBook
overlay.onclick = closeForm

document.querySelector('#addBookForm').addEventListener("submit", function (e) {
  e.preventDefault();
  addBookToLibrary();
  closeForm();
  clearForm();
})

// display book
function display() {
  let libraryBook = document.querySelector('#tableContent')
  libraryBook.innerHTML = ""
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let htmlBook = document.createElement("tr")
    htmlBook.innerHTML = `
    <tr>
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td><button class="btn-read" onclick="toggleRead(${i})">${book.read ? "Read" : "Not read yet"}</button></td>
      <td><button id="btnDelete" onclick="remove(${i})" class="btn-delete">Delete</button></td>
    </tr>
    `;
    libraryBook.appendChild(htmlBook);
  }
}

// save book information
function addBookToLibrary() {
  let title = document.querySelector('#title').value;
  let author = document.querySelector('#author').value;
  let read = document.querySelector('#read').checked;
  let newBook = new Book(title, author, read)
  myLibrary.push(newBook);
  display();
}

// remove book
function remove(index) {
  myLibrary.splice(index, 1);
  display();
}

