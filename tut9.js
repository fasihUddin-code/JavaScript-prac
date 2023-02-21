console.log("This javascript tutorial");

//for loop
// for(let i=0;i<50;i++){
//    // console.log(i);
// }

//while loop
// let j=110;

// while (j<10) {
//    // console.log(j+1);
//     j++;
    
// }

// do-while loop
// let k = 0;
// do {
//     if(k===5){
//         k+=1;
//         continue;
//     }
//     console.log(k);
//     k+=1;

// } while (k < 10);
// console.log("done");

let arr=[ 2 , 5 , 4 , 8 ];
arr.forEach(function (element, index, array) {
   console.log(element,index,array); 
});

// let myObj = {
//     name: "Fasih uddin",
//     age: 26,
//     type: "Front End Developer",
//     os: "Windows"
// };

// for (let key in myObj) {
//     console.log(`The ${key} of objects is ${myObj[key]}`);
    
// };