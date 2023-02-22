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

function appendBookCard(book) {
    const bookContainer = document.createElement("div")
    bookContainer.classList.add("book-card")
    const title = document.createElement("h3")
    const author = document.createElement("p")
    const pages = document.createElement("div")
    const readToggleButton = document.createElement("button")
    readToggleButton.classList.add("read-btn")
    const deleteButton = document.createElement("button")
    deleteButton.classList.add("delete-btn")
    deleteButton.dataset.libraryIndex = library.indexOf(book)
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

function deleteBook() {

}

getInput()
displayBook()