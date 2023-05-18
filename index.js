class Book {
  construct(title, author, read) {
    this.title = title
    this.author = author
    this.read = read
  }
}

class Library {
  constructor() {
    this.book = []
  }
}

// add book ui
const btnAddBook = document.getElementById('btnAddBook')
const bookForm = document.getElementById('bookForm')
const overlay = document.getElementById('overlay')
const form = document.getElementById('addBookForm')

const addNewBook = () => {
  form.reset()
  bookForm.classList.add('active')
  overlay.classList.add('active')
}

const closeForm = () => {
  bookForm.classList.remove('active')
  overlay.classList.remove('active')
}

btnAddBook.onclick = addNewBook
overlay.onclick = closeForm

