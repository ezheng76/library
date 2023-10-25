const myLibrary = [];

function Book(title, author, status) {
    this.title = title;
    this.author = author;
    this.status = status;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

const exampleBook = new Book ("Ikigai: The Japanese Secret to a Long and Happy (This is an example)", "Hector Garcia , Francesc Miralles", "Read")
addBookToLibrary(exampleBook);

const table = document.querySelector("table");
const form = document.querySelector("form");
const userSection = document.querySelector(".books");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let title = document.getElementById("book-title").value;
    let author = document.getElementById("author").value;
    let status;
    if(document.getElementById('read').checked) {
        status = "Read";
    }else if(document.getElementById('not-read').checked) {
        status = "Not Read";
    }
    let book = new Book (title, author, status);
    addBookToLibrary(book);
    display();
    form.reset();
});

function display (){
    let th_number = `<th class="number">No.</th>`;
    let th_title = `<th class="title">Title</th>`;
    let th_author = `<th class="author">Author</th>`;
    let th_status = `<th class="read">Read</th>`;
    table.innerHTML = th_number + th_title + th_author + th_status;


    var bookNum = 1;
    for (let i = 0; i < myLibrary.length; i ++){
        let book = myLibrary[i];
        let title = book.title;
        let author = book.author;
        let status = book.status;

        let tr = document.createElement("tr");
        tr.innerHTML = `<td>${bookNum}</td><td> ${title}</td><td>${author}</td><td> ${status}</td>`;
        table.appendChild(tr);
        bookNum += 1;
    }
}

display();


