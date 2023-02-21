console.log("Tutorial 21 Exercise-2");

/*
You have to create a div and inject it into the page which contains a heading.
Whenever someone clicks on the div , it should be converted into an editable
item. whenever user click away (blur), save the note into the local storage
*/

//I add a new highLighting text feature on the text.

//creating a new Div element

let div = document.createElement('div');
div.setAttribute('id','edit');
div.innerText = 'Double click on me to edit'

//It will increase the text size when mouseover on it.
div.addEventListener('mouseover' , function(){
div.style.fontSize= '35px';

});

//Appending the element to the body

document.body.appendChild(div);

// Creating the editable element
//Whenever someone double click on the text it will turn to editable.

let inpt = document.createElement('input');
inpt.setAttribute('value','');
document.getElementById('edit').addEventListener('dblclick',function(){
div.replaceWith(inpt);

});

//click the outside to save the text into local storage as (Edited) name.
inpt.addEventListener('blur',function(){
localStorage.setItem('Edited',JSON.stringify(inpt.value));   


});

