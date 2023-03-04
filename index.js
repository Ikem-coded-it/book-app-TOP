let library = []

class Book {

    constructor (title, author, pages, read) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
    }
    
    changeStatus (button) {
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

    deleteBook(button) {
        library.splice(library.indexOf(this), 1)
        const bookCard = button.parentElement.parentElement;
        bookCard.remove();
    }

    appendBookCard() {
        const bookContainer = document.createElement("div")
        bookContainer.classList.add("book-card")
        const title = document.createElement("h3")
        const author = document.createElement("p")
        const pages = document.createElement("div")

        const readToggleButton = document.createElement("button")
        readToggleButton.classList.add("read-btn")
        if (this.read == "Read") {
            readToggleButton.classList.add("read-btn-read")
        } else if (this.read == "Not read")  {
            readToggleButton.classList.add("read-btn-notread")
        }
        readToggleButton.dataset.libraryIndex = library.indexOf(this)
        readToggleButton.addEventListener("click", (e) => {
            this.changeStatus(readToggleButton)
        })

        const deleteButton = document.createElement("button")
        deleteButton.classList.add("delete-btn")
        deleteButton.dataset.libraryIndex = library.indexOf(this)
        deleteButton.addEventListener("click", (e) => {
            this.deleteBook(deleteButton)
        })

        const bookBtnContainer = document.createElement("div");
        bookBtnContainer.classList.add("book-btn-container")
        bookBtnContainer.appendChild(readToggleButton)
        bookBtnContainer.appendChild(deleteButton)
        
        title.innerText = this.title;
        author.innerText = 'by' + ' ' + this.author;
        pages.innerText = this.pages + ' ' + 'pages';
        readToggleButton.innerText = this.read
        deleteButton.innerText = "Delete"
            
        bookContainer.appendChild(title)
        bookContainer.appendChild(author)
        bookContainer.appendChild(pages)
        bookContainer.appendChild(bookBtnContainer)
        libraryContainer.appendChild(bookContainer);
    }
}

 // Create default library books
library.push(new Book("One piece", "Eiichiro Oda", 10000, "Read"))
library.push(new Book("Naruto", "Masashi Kishimoto", 2000, "Not read"))
library.push(new Book("Avatar: Last Air Bender", "Michael Dante", 200, "Read"))

 

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
        newBook.appendBookCard()
        hideForm()
    })
}

function displayBook() {
    library.forEach(book => {
        book.appendBookCard()
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

getInput()
displayBook()