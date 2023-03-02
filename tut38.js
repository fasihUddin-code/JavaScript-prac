// You have pretend to use a word api which will contain an object and you have to print definition from all the results of that word api.
// you have to take input from an input tag.
// you have to print it in the dom
// if you are using bootstrap then its a plus

console.log('Using a Dictonary API Exercise:5');

let fetchBtn = document.getElementById('fetchBtn');

fetchBtn.addEventListener('click',buttonClickHandler);

function buttonClickHandler(){
    console.log('You have clicked the fetchBtn');

    //Intantiate an xhr object
    const xhr = new XMLHttpRequest();

    //Open the object
    //Used this for POST Request
    xhr.open('POST','https://api.dictionaryapi.dev/api/v2/entries/en/<word>',true);

    // Set the content type of the request
    xhr.setRequestHeader('Content-type' , 'application/json');

    //What to do when response is ready

    xhr.onload = function(){
        if(xhr.status == 200){
            console.log(this.responseText);
            let obj = JSON.parse(this.responseText);
            let list = document.getElementById('list');
            let str= "";
            for (let index = 0; index < obj.length; index++) {
                let ele = obj[index]["definitions"];
                console.log(ele);
                
            }
            for (key in obj.data) {
                str += `<li>${key["definitions"]}</li>`;
            }
            list.innerHTML = str;

        }
        else{
            console.log('some error occured')
        }

    }

    //send the request
    let inputWord = document.getElementById('word');
    xhr.send(inputWord);

    console.log('We are done fetching word defination');

}
