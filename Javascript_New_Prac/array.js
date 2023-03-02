console.log("Array Practice");

let marks_std = [56,45,25,45, 'Not present' , false ];
console.log(marks_std[0]);
console.log(marks_std[1]);
console.log(marks_std[2]);
console.log(marks_std[3]);
console.log(marks_std[4]);
marks_std[6] = 89;  //Adding a new value to the array
marks_std[0] = 65 //Changing the value of an array
//console.log(marks_std);
//console.log(typeof marks_std);
//console.log(`The length of marks_std is ${marks_std.length}`);


//Example of array

let friuts = ['Apple','Banana','Mango'];
for (let index = 0; index < friuts.length; index++) {
    console.log(friuts[index]);
}