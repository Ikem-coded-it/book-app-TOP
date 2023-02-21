let library = [
    {title: "One piece", author: "Eiichiro Oda", pages: 10000, read: "read"},
    {title: "Naruto", author: "Masashi Kishimoto", pages: 2000, read: "not read"},
    {title: "Avatar: Last Air Bender", author: "Michael Dante", pages: 200, read: "not read"},
]

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function getInput() {
    const form = document.querySelector("#form");
    form.addEventListener("submit", function(e) {
        e.preventDefault()
        let title = e.target.title.value;
        let author = e.target.author.value;
        let pages = e.target.pages.value;

        let read = e.target.read.checked;
        if (read != true) {
            e.target.read.value = "not read"
        }
        
        let readValue = e.target.read.value;
        const newBook = new Book(title, author, pages, readValue)
        library.push(newBook)
        appendNewBook(library[library.length - 1])
    })
}

let libraryContainer = document.querySelector('.library-container');

function displayBook() {
    library.forEach(book => {
        console.log(book)
        const bookContainer = document.createElement("div")
        const title = document.createElement("h3")
        const author = document.createElement("p")
        const pages = document.createElement("div")
        const readToggleButton = document.createElement("button")
        
        title.innerText = book.title;
        author.innerText = book.author;
        pages.innerText = book.pages;
        readToggleButton.innerText = book.read
         
        bookContainer.appendChild(title)
        bookContainer.appendChild(author)
        bookContainer.appendChild(pages)
        bookContainer.appendChild(readToggleButton)
        libraryContainer.appendChild(bookContainer);
    })
}

function appendNewBook(book) {
    const bookContainer = document.createElement("div")
    const title = document.createElement("h3")
    const author = document.createElement("p")
    const pages = document.createElement("div")
    const readToggleButton = document.createElement("button")
    
    title.innerText = book.title;
    author.innerText = book.author;
    pages.innerText = book.pages;
    readToggleButton.innerText = book.read
        
    bookContainer.appendChild(title)
    bookContainer.appendChild(author)
    bookContainer.appendChild(pages)
    bookContainer.appendChild(readToggleButton)
    libraryContainer.appendChild(bookContainer);
}

getInput()
displayBook()