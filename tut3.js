//Primitive DataTypes

//String
let Fname="fasih uddin";
console.log("My String is "+ Fname);
console.log("Data Type is "+ typeof Fname);

//Number 
let age = 36;
let x=5**2;
console.log("Data Type is "+ typeof age);
console.log(x);

//Boolean
let isDriver = true;
console.log("Data Type is "+ typeof isDriver);

//null

let nullVar = null;
console.log("Data Type is "+ typeof nullVar);

//undefined

let undefVar = undefined;
console.log("Data Type is "+ typeof undefVar);

//Reference Data types

//Array

let myArr = [1 , 2 , 3 , true , "Fasih"];
console.log("Data Type is "+ typeof myArr);

//Object literals
let stdMarks ={
    'Fasih uddin' : 78,
    Nadeem : 66
};
console.log(typeof stdMarks);

//function

function findName(){

}
console.log(typeof findName);

//Date

let date = new Date();
console.log("Data Type is "+ typeof date);

//Bitwise Operators

let r;
r= 5 & 1; //AND Operator
console.log(r);

let t = 5 | 1;
console.log(t); //OR Operator

let u = 5 ^ 1; //XOR Operator
console.log(u);

let p= ~5; //NOT Operator
console.log(p);

let l = 5 << 1; //left shift Operator
console.log(l);

let k = 5 >> 1; //right shift Operator
console.log(k);
