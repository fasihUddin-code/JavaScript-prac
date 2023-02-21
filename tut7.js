console.log("This is tutorial");
let marks=[87 , 78 , 95 , 88 , 73];
const friuts=["Apple" , "Orange" , "Peach" , "Apricot"];
const mixedArr = [87 , true , "Orange" , [ 25 , 66 ] ];

const arr = new Array(68 , 78 , 65 , 78);
//console.log(arr);
//console.log(marks);
//console.log(mixedArr.length);
//console.log(friuts[2]);

friuts[0] = 'Mango' ;
//console.log(friuts);

//console.log(Array.isArray(arr));
 let arrElement= arr[0];
 //console.log(arrElement)
console.log(marks);
let valIndex= marks.indexOf(95);
console.log(valIndex);

//Mutating Or Modifying Arrays

marks.push(91);
marks.unshift(56);