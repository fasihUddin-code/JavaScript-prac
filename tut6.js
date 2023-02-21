let html;
html = "<h1> This isHeading one </h1> " + " <p> This is paragraph </p> ";
html = html.concat("to be continue..");
// console.log(html.length);
// console.log(html.toLowerCase());
// console.log(html.toUpperCase());
// console.log(html);
// console.log(html.lastIndexOf('e'));
// console.log(html.charAt(1));

// console.log(html.endsWith('e..'));
// console.log(html.includes('Heading'))
// console.log(html.substring(1,5));
// console.log(html.slice(0,5))
// console.log(html.split(' '));
//console.log(html.replace('This','That'));
// let name= "Fasih",friut1="orange",friut2="apple";
// let myHtml = `Hello ${name}
//                 <h1>This is Heading</h1>
//                 <p>You Like ${friut1} and ${friut2}</p>`                
// ;
// document.body.innerHTML = myHtml;

//Create an object
const car ={
    type: 'Fiat',
    model: '500',
    color: 'black'

};

//Display some data from the object
document.getElementById("demo").innerHTML = "The car color is "+car["color"];