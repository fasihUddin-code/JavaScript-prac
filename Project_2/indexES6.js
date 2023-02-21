console.log("This is ES6 version of Project-2");

class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;

    }
    insertLocalStorage(book) {
        let bookObj;
        let bookStore = localStorage.getItem('bookStore');
        if (bookStore == null) {
            bookObj = [];
        }
        else {

            bookObj = JSON.parse(bookStore);
        }

        bookObj.push(book);
        localStorage.setItem('bookStore', JSON.stringify(bookObj))
        }
    }

class Display {
    add() {
        console.log("Adding To UI");
        let tableBody = document.getElementById('tableBody');
        let bookObj;
        let bookStore = localStorage.getItem('bookStore');
        if (bookStore == null) {
            bookObj = [];
        }
        else {

            bookObj = JSON.parse(bookStore);
        }

        let stringUI ="";
         bookObj.forEach(function(book,index){
            

            stringUI += `<tr>
            <td>${book.name}</td>
            <td>${book.author}</td>
            <td>${book.type}</td>
            <td><button id="${index}" onclick="display.deleteNote(this.id)" type="submit" class="btn btn-secondary btn-sm">Delete</button> </td>
            </tr>`;
        });
        console.log(bookObj);
        if(bookObj.length != 0){

            tableBody.innerHTML = stringUI;
        }
        else{
            tableBody.innerHTML = `<b>There is no book the library</b>`;
        }
    }
    clear() {
        let libraryForm = document.getElementById('libraryForm');
        libraryForm.reset();
    }

    validate(book) {
        if (book.name.length < 2 || book.author.length < 2) {

            return false;

        }
        else {
            return true
        }


    }
    deleteNote(index){

        let bookObj;
        let bookStore = localStorage.getItem('bookStore');
        if (bookStore == null) {
            bookObj = [];
        }
        else {

            bookObj = JSON.parse(bookStore);
        }
        bookObj.splice(index,1);
        localStorage.setItem('bookStore',JSON.stringify(bookObj));
        display.add();

    }

    show(type, DisplayMessage) {
        let message = document.getElementById('message');
        let boldText;
        if (type === 'success') {
            boldText = 'Success';
        }
        else {
            boldText = 'Error!';
        }
        message.innerHTML = `
                <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                    <strong>${boldText}</strong> ${DisplayMessage}
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>`;

                setTimeout(function () {
                    message.innerHTML = '';
                }, 3000);
                
            }
        }
        
let display = new Display();
display.add()
//Add submit event listener to libraryForm
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log("you have submitted the form");
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('authorName').value;

    let Fiction = document.getElementById('Fiction');
    let Programming = document.getElementById('Programming');
    let Cooking = document.getElementById('Cooking');
    let type;

    if (Fiction.checked) {
        type = Fiction.value;
    }

    else if (Programming.checked) {
        type = Programming.value;
    }


    else if (Cooking.checked) {
        type = Cooking.value;
    }

    let book = new Book(name, author, type);
    console.log(book);

    if (display.validate(book)) {

        let bookItemlocalStorage = new Book();
        bookItemlocalStorage.insertLocalStorage(book);
        display.add();
        display.clear();
        display.show('success', 'You Book has been successfully added');
    }
    else {
        //show error to the user
        display.show('danger', 'Sorry you cannot add this book');
    }

    e.preventDefault();
}


