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
console.log(num);
console.log(s);