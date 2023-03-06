console.log('Using Loops With Arrays');

//Classical for loop
// let numArr = [121, 25 , 65 , 54 , 447];
// for(let i=0;i<numArr.length;i++){
//     console.log(numArr[i]);
// }

//forEach loop
// let numArr = [121, 25 , 65 , 54 , 447];
// numArr.forEach((element)=>{     // forEach loop shortesy way as compare to classical for loop
// console.log(element * element);

// });

//Array.from

// let fullName = "FasihUddin";
// let newArr =  Array.from(fullName); //convert a string to array
// console.log(newArr);

//for..of
// let numArr = [121, 25 , 65 , 54 , 447];
// for (let i of numArr) {  //shortest way to iterate array elements
//     console.log(i);
// }

//for..in
let numArr = [121, 25 , 65 , 54 , 447];
for (let i in numArr) {  //iterate array index/key
    console.log(i);
}




