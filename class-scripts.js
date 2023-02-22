// Book Class: Represents a Book
class Book {
    constructor(title, author, isbn) {
      this.title = title;
      this.author = author;
      this.isbn = isbn;
    }
  }

// UI Class: Handle UI Tasks

class UI {
    static displayBooks(){
        const storedBooks = [
            {
              title: 'Book one',
              author: 'Abdul Ali Noori',
              isbn: '313313'
            },
            {
              title: 'Book two',
              author: 'Abdul Ali Noori',
              isbn: '313312'
            },
            {
              title: 'Book two',
              author: 'Abdul Ali Noori',
              isbn: '313312'
            },
            {
              title: 'Book two',
              author: 'Abdul Ali Noori',
              isbn: '313312'
            },
        ];

        const books = storedBooks;

        books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book){
      const list = document.querySelector('#book-list');

      const row = document.createElement('tr');

      row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">x</a></td>
      `;

      list.appendChild(row);
    }

    static deleteBook(el) {
      if(el.classList.contains('delete')){
        el.parentElement.parentElement.remove();
      }
    }

    static clearFields() {
      document.querySelector('#title').value = '';
      document.querySelector('#author').value = '';
      document.querySelector('#isbn').value = '';
    }
}

// Store Class: Handle Storage

// Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Add a book
document.querySelector('#book-form').addEventListener('submit', (e) => {

  // prevent default submit
  e.preventDefault();

  // get form values
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const isbn = document.querySelector('#isbn').value;

  // making object of Book class
  const book = new Book(title, author, isbn);

  // add book to UI
  UI.addBookToList(book);

  // clear fields
  UI.clearFields();
});

// Event: Delete a book
document.querySelector('#book-list').addEventListener('click', (e) => {
  UI.deleteBook(e.target);
});