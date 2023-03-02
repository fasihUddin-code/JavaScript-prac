console.log("Promises Example");


//example:1

// let promise = new Promise(function(resolve, reject){

//     const x = "Fasihuddin";
//     const y = "Fasihuddin";
//     if(x===y){
//         resolve();
//     }
//     else{
//         reject();
//     }

// });

// promise.then(function(){
//     console.log('success you are fasih uddin')
// }).catch(function(){
//     console.log('some error occured');
// })


let promise = new Promise(function(resolve, reject){
//success handler function is invoked 
//resolve('Promise resolved');
reject('promise rejected')

});

promise.then(function(successMessage){
    console.log(successMessage);
}, function (errorMessage){
    console.log(errorMessage);
});