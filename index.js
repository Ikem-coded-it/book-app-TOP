let library = []

// Book constructor
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

Book.prototype.changeStatus = function(button) {
    if (this.read != "Read" && button.innerText != "Read") {
        this.read = "Read"
        button.innerText = "Read"
        button.classList.remove("read-btn-notread")
        button.classList.toggle("read-btn-read")
        return
    }  

    this.read = "Not read"
    button.innerText = "Not read"
    button.classList.remove("read-btn-read")
    button.classList.toggle("read-btn-notread")
}

 // Create default library books
library.push(new Book("One piece", "Eiichiro Oda", 10000, "Read"))
library.push(new Book("Naruto", "Masashi Kishimoto", 2000, "Not read"))
library.push(new Book("Avatar: Last Air Bender", "Michael Dante", 200, "Read"))

// Create and append elements for single book
function appendBookCard(book) {
    const bookContainer = document.createElement("div")
    bookContainer.classList.add("book-card")
    const title = document.createElement("h3")
    const author = document.createElement("p")
    const pages = document.createElement("div")

    const readToggleButton = document.createElement("button")
    readToggleButton.classList.add("read-btn")
    if (book.read == "Read") {
        readToggleButton.classList.add("read-btn-read")
    } else if (book.read == "Not read")  {
        readToggleButton.classList.add("read-btn-notread")
    }
    readToggleButton.dataset.libraryIndex = library.indexOf(book)
    readToggleButton.addEventListener("click", (e) => {
        book.changeStatus(readToggleButton)
    })

    const deleteButton = document.createElement("button")
    deleteButton.classList.add("delete-btn")
    deleteButton.dataset.libraryIndex = library.indexOf(book)
    deleteButton.addEventListener("click", (e) => {
        deleteBook(e.target.dataset.libraryIndex, deleteButton)
    })

    const bookBtnContainer = document.createElement("div");
    bookBtnContainer.classList.add("book-btn-container")
    bookBtnContainer.appendChild(readToggleButton)
    bookBtnContainer.appendChild(deleteButton)
    
    title.innerText = book.title;
    author.innerText = 'by' + ' ' + book.author;
    pages.innerText = book.pages + ' ' + 'pages';
    readToggleButton.innerText = book.read
    deleteButton.innerText = "Delete"
        
    bookContainer.appendChild(title)
    bookContainer.appendChild(author)
    bookContainer.appendChild(pages)
    bookContainer.appendChild(bookBtnContainer)
    libraryContainer.appendChild(bookContainer);
}


let libraryContainer = document.querySelector('.library-container');
let form = document.querySelector(".form");
let newBookBtn = document.querySelector(".show-form-btn");
let inputs = document.querySelectorAll("input");

// Get new book input from form
function getInput() {
    form.addEventListener("submit", function(e) {
        e.preventDefault()
        let title = e.target.title.value;
        let author = e.target.author.value;
        let pages = e.target.pages.value;

        let read = e.target.read.checked;
        if (read != true) {
            e.target.read.value = "Not read"
        }
        
        let readValue = e.target.read.value;
        const newBook = new Book(title, author, pages, readValue)
        library.push(newBook)
        appendBookCard(library[library.length - 1])
        hideForm()
    })
}

function displayBook() {
    library.forEach(book => {
        appendBookCard(book)
    })
}

newBookBtn.addEventListener("click", function(e) {
    form.classList.toggle("show")
})

function hideForm() {
    inputs.forEach(input => { 
        if (input.type != "checkbox") input.value = ''
        if (input.checked = true) input.checked = false;
    })
    form.classList.toggle("show") 
    newBookBtn.classList.toggle("show")
}

function deleteBook(index, button) {
    library.splice(index, 1)
    const bookCard = button.parentElement.parentElement;
    bookCard.remove();
}

getInput()
displayBook()