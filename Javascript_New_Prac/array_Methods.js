console.log('Array Methods');

let num = [1,2,87,14]
//console.log(num);
//console.log(num.toString());
//console.log(num);

let b= num.toString(); // b is now a string
//console.log(b);
//console.log(typeof b);

let c = num.join('_');
//console.log(c);
//console.log(typeof c);

//let r =num.pop() //pop returns the popped element
//console.log(num);
//console.log(r);

let p = num.push(67) //push returns the new array length
//console.log(num);
//console.log(p);

// let s =num.shift()//Remove an element from the start of the array
// console.log(num);
// console.log(s);

let s =num.unshift('rollNo2')//Add an element from the start of the array returns the new array length  
//console.log(num);
//console.log(s);

let numbers = [1,2,3,4,5,6];
//console.log(numbers.length);
//delete numbers[0]; //delete operator does not effect the array length
//console.log(numbers);

let numMore= [11,12,13,14,15,16];//concat() method does not change original array
let evenNum = [10,20,30,40,50,60,70];
let modiArr  = numbers.concat(numMore,evenNum);
//console.log(modiArr);
// console.log(numMore);
// console.log(evenNum);

//sort() method
//when we write "return a - b" then array sort by ascending order
//when we write "return a - b" then array sort by descending order

//let campare =(a,b)=>{ return b-a };

//let Arr = [25,25,1,14,15,254,554,207];//sort() method change the original array and sort by alphabatical order
//Arr.sort(campare);
//console.log(Arr);

//Arr.reverse()//reverse() method reverse the original array
//console.log(Arr);

//Splice and Slice
let Arr = [25,24,1,14,15,254,554,207];
//let returnVal =  Arr.splice( 1 , 2 , 102 , 103 , 104 ); //Splice change the original array and return removed elements.
//console.log(returnVal); 
//console.log(Arr);

let removeVal = Arr.slice(3,6); //slice method not change the original array
console.log(removeVal);
