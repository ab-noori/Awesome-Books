const bookUnStringfy = JSON.parse(localStorage.getItem('bookDataToLocalStorage'));

let bookData = bookUnStringfy || [];

function displayBooks() {
    let innerHTML = '';
    for (let i = 0; i < bookData.length; i += 1) {
      innerHTML += `
                <div class="col col-12" id="${bookData[i].id}">
                    <p>${bookData[i].title}</p>
                    <p>${bookData[i].author}</p>
                    <button class="btn btn-outline-dark id="remove" onclick="removeBook(${bookData[i].id})">Remove</button>
                    <hr>
                </div>
              `;
    }
    document.querySelector('#row').innerHTML = innerHTML;
  }

  displayBooks();

// ----------------------------Add New Book--------------------------------------

const addButton = document.getElementById('add');

addButton.addEventListener('click', (e) => {
    e.preventDefault();
    const getTitle = document.getElementById('title').value;
    const getAuthor = document.getElementById('author').value;

    if (getTitle && getAuthor){
        bookData.push({
            id: bookData.length+1, 
            title: getTitle, 
            author: getAuthor,
        });
    }
    
    localStorage.setItem('bookDataToLocalStorage', JSON.stringify(bookData));
    displayBooks();
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
});

// ----------------------------Remove Book--------------------------------------

function removeBook(id) {
    filteredBooks = bookData.filter((book) => id !== book.id);
    localStorage.setItem('bookDataToLocalStorage', JSON.stringify(filteredBooks));
    const removItem = document.getElementById(id);
    removItem.remove();
}