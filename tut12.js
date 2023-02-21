console.log("Testing");

let a = document;
a= document.all;
// a= document.body;
// a= document.forms;
// Array.from(a).forEach(function(element){
//     console.log(element);
// });
a= document.links[0].href;
//console.log(a);

let num= document.images.length;
document.getElementById("demo").innerHTML = num;