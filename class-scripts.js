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
        ];

        const books = storedBooks;

        books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book){

    }
}
