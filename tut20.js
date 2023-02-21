console.log("This is tutorial # 20");

let vegArr= ['Pyaz','matar','Aalo'];

//Add a key-value pair inside localStorage
// localStorage.setItem('Name','Fasih');
// localStorage.setItem('Name2','Zaki');
// localStorage.setItem('Sabzi',JSON.stringify(vegArr)); 

//Clears the entire localStorage
//localStorage.clear();


//Clear a particular key-value pair
//localStorage.removeItem('Name2');

//Retrieve an Item from the localStorage
let name = localStorage.getItem('Name');
name = JSON.parse(localStorage.getItem('Sabzi'));
console.log(name);

// sessionStorage.setItem('sessionName','sFasih');
// sessionStorage.setItem('sessionName2','sZaki');
// sessionStorage.setItem('sessionSabzi',JSON.stringify(vegArr)); 
