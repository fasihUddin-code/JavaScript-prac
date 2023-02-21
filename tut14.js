//Single Element Selector
let element = document.getElementById("first");
//element = element.className;
//element = element.childNodes;
//element = element.parentNode;
//element.style.border= "3px solid red";
element.innerText = '1 children of div container';
element.innerHTML = '<b>1 children of div container</b>'
//console.log(element.innerText)

let sel = document.querySelector('#heading');
sel = document.querySelector('img');
sel = document.querySelector('div');
sel = document.querySelector('.child');
sel.style.color = "green";
//console.log(sel);

//Multi Element Selector

let elements = document.getElementsByClassName('child');
elements= document.getElementsByClassName('container');
//console.log(elements[0].getElementsByClassName('child'));
elements = document.getElementsByTagName('div');
//console.log(elements)

// Array.from(elements).forEach(element => {
//     console.log(element);
//     element.style.fontSize= "35px";
// });

for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    element.style.color = "darkgrey";
    
}