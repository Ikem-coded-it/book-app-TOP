let library = [
    {title: "book1", author: "author1", pages: 55, read: "read"},
    {title: "book2", author: "author2", pages: 54, read: "not read"},
    {title: "book3", author: "author3", pages: 200, read: "not read"},
    {title: "book4", author: "author4", pages: 621, read: "read"},
]

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

let libraryContainer = document.querySelector('div');

function displayBook() {
    console.log(libraryContainer)
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

displayBook()