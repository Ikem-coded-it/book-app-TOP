let library = [
    {title: "One piece", author: "Eiichiro Oda", pages: 10000, read: "Read"},
    {title: "Naruto", author: "Masashi Kishimoto", pages: 2000, read: "Not read"},
    {title: "Avatar: Last Air Bender", author: "Michael Dante", pages: 200, read: "Not read"},
]

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

let libraryContainer = document.querySelector('.library-container');
let form = document.querySelector(".form");
let newBookBtn = document.querySelector(".show-form-btn");
let inputs = document.querySelectorAll("input");

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
        appendNewBook(library[library.length - 1])
        hideForm()
    })
}

function displayBook() {
    library.forEach(book => {
        const bookContainer = document.createElement("div")
        const title = document.createElement("h3")
        const author = document.createElement("p")
        const pages = document.createElement("div")
        const readToggleButton = document.createElement("button")
        const deleteButton = document.createElement("button")
        deleteButton.classList.add("delete-btn")
        
        title.innerText = book.title;
        author.innerText = book.author;
        pages.innerText = book.pages;
        readToggleButton.innerText = book.read
        deleteButton.innerText = "Delete"
         
        bookContainer.appendChild(title)
        bookContainer.appendChild(author)
        bookContainer.appendChild(pages)
        bookContainer.appendChild(readToggleButton)
        bookContainer.appendChild(deleteButton)
        libraryContainer.appendChild(bookContainer);
    })
}

function appendNewBook(book) {
    const bookContainer = document.createElement("div")
    const title = document.createElement("h3")
    const author = document.createElement("p")
    const pages = document.createElement("div")
    const readToggleButton = document.createElement("button")
    const deleteButton = document.createElement("button")
    deleteButton.classList.add("delete-btn")
    
    title.innerText = book.title;
    author.innerText = book.author;
    pages.innerText = book.pages;
    readToggleButton.innerText = book.read
    deleteButton.innerText = "Delete"
        
    bookContainer.appendChild(title)
    bookContainer.appendChild(author)
    bookContainer.appendChild(pages)
    bookContainer.appendChild(readToggleButton)
    bookContainer.appendChild(deleteButton)
    libraryContainer.appendChild(bookContainer);
}

newBookBtn.addEventListener("click", function(e) {
    form.classList.toggle("show")
    e.target.classList.toggle("hide")
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