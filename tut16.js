console.log("This is Tuto16 file JS");
let ele = document.createElement('li');
let textNode = document.createTextNode(' I Am Text Node');
ele.appendChild(textNode);
//Add a class name to the li element
ele.className = 'childUl-1';
ele.id = 'createdLI';
ele.setAttribute('title','mytitle');
//ele.innerHTML ='<b>list-item-6</b>';

let ul = document.querySelector('ul.ulDiv');
ul.appendChild(ele)
//console.log(ul)
//console.log(ele);

let elem2 = document.createElement('h3');
elem2.id= 'elemId';
elem2.className = 'elemClass';
let txtnode = document.createTextNode('This is text node for element_2');
elem2.appendChild(txtnode);
//console.log(elem2);

ele.replaceWith(elem2);
let myUl = document.getElementById('ulId');
myUl.replaceChild(ele,document.getElementById('fli'));
myUl.removeChild(document.getElementById('lli'));
//console.log(elem2);

let atrVar = elem2.hasAttribute('id');

elem2.removeAttribute('id');
elem2.setAttribute('title','myElem2Title');
//console.log(elem2);


//Harry Assignment For Tutorial#16
let hElem= document.createElement('h3');
let txtHElem = document.createTextNode('Go to CodeWithHarry');
hElem.appendChild(txtHElem);
//console.log(hElem);

let link = document.createElement('a');
link.setAttribute('href','https://www.codewithharry.com');
link.setAttribute('target','_blank');
link.id= 'linkId';
link.appendChild(hElem);
//console.log(link);

let divElement = document.querySelector('.no');
divElement.appendChild(link);
console.log(divElement);




