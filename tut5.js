//Type conversion 
let myVar = 34;
//console.log(myVar ,(typeof myVar));
myVar = String(34);
//console.log(myVar ,(typeof myVar));
let booleanVar = false;
booleanVar = String(false);
//console.log(booleanVar ,(typeof booleanVar0));
let date = String(new Date());
//console.log(date ,(typeof date));

let arrVar = String([1,2,3,4,5,6]);
//console.log(arrVar.length ,(typeof arrVar));

let i = "name";
i.toString();
console.log(typeof i);

let varStr;;
varStr = Number("3d4");
varStr = Number(true);


//console.log(varStr , (typeof varStr));

let num = parseFloat('554.5044');
//num = Number([1,6,6,5]);
console.log(num.toFixed(1) , (typeof num))

//Type coercion

let myStr = Number("36"), myNum = 34;
console.log(myStr+myNum)



