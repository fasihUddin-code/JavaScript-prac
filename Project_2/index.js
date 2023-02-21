console.log("This is index.js");
//Todos"
//1: Store all the data to the localStorage.
//2: Give another column as an option to delete the book.
//3: Add a scroll bar to the view.

//constructor
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;

}

//Display constructor
function Display() {

}

// Add methods to display prototype
Display.prototype.add = function(book){
    console.log("Adding To UI");
    let tableBody = document.getElementById('tableBody');
    let  stringUI = 
    `<tr>
            <td>${book.name}</td>
            <td>${book.author}</td>
            <td>${book.type}</td>
            
     </tr>`;
     tableBody.innerHTML += stringUI;
};


//
Display.prototype.clear = function(){
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
};

//Implement the validate function
Display.prototype.validate = function(book){
    if (book.name.length<2 || book.author.length<2){
        
        return false;

    }
    else{
        return true
    }

};

Display.prototype.show = function(type,DisplayMessage){
let message =document.getElementById('message');
message.innerHTML = `
        <div class="alert alert-${type} alert-dismissible fade show" role="alert">
            <strong>Message:</strong> ${DisplayMessage}
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>`;

setTimeout(function() {
    message.innerHTML ='';
}, 3000);

}


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

    let display = new Display();
    if(display.validate(book)){

        display.add(book);
        display.clear();
        display.show('success','You Book has been successfully added');
    }
    else
    {
        //show error to the user
        display.show('danger', 'Sorry you cannot add this book');
    }

    e.preventDefault();
}