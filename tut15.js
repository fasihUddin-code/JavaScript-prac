console.log("testing js script");

let cont = document.querySelector('.no');
cont = document.querySelector('.container');
let nodeName = cont.childNodes[4].nodeName;
let nodeType = cont.childNodes[4].nodeType;
//console.log(nodeName);
//console.log(nodeType);
let container = document.querySelector('.container');
//console.log(container.children[1].children[0]);
//console.log(container.firstChild);
//console.log(container.firstElementChild);
//console.log(container.lastElementChild);
//console.log(container.lastChild);
//console.log(container.childNodes);
//console.log(container.children);
//console.log(container.childElementCount); //count of child elements
console.log(container.firstElementChild.parentNode);
console.log(container.firstElementChild.nextSibling);
console.log(container.firstElementChild.nextElementSibling);
console.log(container.firstElementChild.nextElementSibling.nextElementSibling);