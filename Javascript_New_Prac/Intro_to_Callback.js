//Synchronous Programmiing
// let a = prompt('What is your name?');
// let b = prompt('What is your age?');
// let c = prompt('What is your favourite color?');
// console.log(`${a} is ${b} years old and has ${c} favourite color`);

//Asynchronous Programming

// console.log('Start');
// setTimeout(() => {
//     console.log('Hi i am good');
// }, 3000);
// console.log('End');

//Callbacks 
//Callbacks means that we will pass function as a argument

function loadScript(src,callback){

    let script2 = document.createElement('script');
    script2.src= src;
    script2.onload = function(){
        console.log(`Loaded script with SRC: ${src}`);
        callback(null,src);
    }
    script2.onerror= function(){
        console.log(`Error loading script with src ${src}`);
        callback(new Error('src got some error'));
    }

    document.body.appendChild(script2);

}

function hello(error,src){
    if(error){
        console.log(error);
        return;
    }
    console.log('Hello world '+src);
}

function goodmorning(error,src){
    if(error){
        console.log(error);
        return;
    }
    console.log('GOOD MORNING '+src);
}

loadScript('https://www.google.com',goodmorning)