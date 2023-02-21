console.log("This is tutorial # 25");

/*
You have to create a div  and inject it into the page which contains a heading.
whenever someone clicks on the div, it should be converted into an editable item, whenever user clicks away (blur) save the node into localStorage
*/

//Create a new element
let divElem = document.createElement('div');

//Add text to that created element
let val = localStorage.getItem('text');
let txtNode;
if (val == null){

txtNode = document.createTextNode('This is my element, click to edit it!');
}
else{
    txtNode - document.createTextNode(val);
} 

divElem.appendChild(txtNode);

// Give element id,class and style
divElem.setAttribute('id','eDiv');
divElem.setAttribute('class','eDiv');
divElem.setAttribute('style',' border : 2px solid black ; height : 40px ; width : 185px ; margin : 25px ; padding : 15px ;')

//Grab the main container
let divContainer = document.querySelector('.container');
let first = document.getElementById('first');

// Insert the element before element with id first
divContainer.insertBefore(divElem,first);

//console.log(divElem, divContainer, first);

//add event listener to the divElem

divElem.addEventListener('click',function(elem){

let noTxtArea = document.getElementsByClassName('txtArea').length;

if(noTxtArea == 0){

    let html = eDiv.innerHTML;
    divElem.innerHTML = ` <textarea class="txtArea" id="txtArea" name="txtArea" rows="3"> ${html} </textarea>`;;
}    

 //Listen for the blur event on textArea
 let textArea = document.getElementById('txtArea');
 textArea.addEventListener('blur',function(){

     eDiv.innerHTML = textArea.value;
     localStorage.setItem('text',textArea.value);
    })

});