console.log('Promises Example');
//Promise
//resolve and reject built in callbacks in javascript
//Promises used for parallel execution and chose promises instead of callBack functions

let promise = new Promise((resolve,reject)=>{
    alert('Hello Promise')
    resolve(109)

});



// console.log('Hello One');
// setTimeout(() => {
//     console.log('after two seconds print hello two');
// }, 2000);

// console.log('Hello Three');

console.log(promise);