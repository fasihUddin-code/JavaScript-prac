console.log("Ajax in one vedio");

let FetchBtn = document.getElementById('FetchBtn');

FetchBtn.addEventListener('click', buttonClickHandler);

function buttonClickHandler() {

    console.log('You have clicked the FetchBtn ');

    //Intantiate an xhr object
    const xhr = new XMLHttpRequest();

    //Open the object
    // xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1',true);

    //Used this for POST Request
    xhr.open('POST', 'https://dummy.restapiexample.com/api/v1/create', true);
    
    // Set the content type of the request
    xhr.setRequestHeader('Content-type', 'application/json');



    //What to do on progress (optional)
    xhr.onprogress = function () {
        console.log('On Progress');
    }

    // xhr.onreadystatechange = function(){
    //     console.log(`ready state is ${xhr.readyState}`);
    // }



    //What to do when response is ready
    xhr.onload = function () {
        if (xhr.status === 200) {

            console.log(this.responseText);
        }
        else {
            console.log('Some error occured');
        }
    }

    //Send the request
    params = '{"name":"test6","salary":"123","age":"23"}';
    xhr.send(params);

    console.log('We are done');


}

let PopulateBtn = document.getElementById('PopulateBtn');
PopulateBtn.addEventListener('click',popHandler);

function popHandler(){
    console.log('You have clicked the popHandler ');

    //Intantiate an xhr object
    const xhr = new XMLHttpRequest();

    //Open the object
    xhr.open('GET','https://dummy.restapiexample.com/api/v1/employees',true);

    // //Used this for POST Request
    // xhr.open('POST', 'https://dummy.restapiexample.com/api/v1/create', true);
    
    // Set the content type of the request
    // xhr.setRequestHeader('Content-type', 'application/json');




    //What to do when response is ready
    xhr.onload = function () {
        if (xhr.status === 200) {

            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let list = document.getElementById('list');
            str= "";
            for (key of obj.data) {
              str += `<li>${key.employee_name}</li>`
            }
            list.innerHTML = str;
        }
        else {
            console.log('Some error occured');
        }
    }

    //Send the request
    xhr.send();

    console.log('We are done fetching employees');


}