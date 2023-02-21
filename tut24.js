console.log("This is Tutorial # 24");

let today = new Date();
//console.log(today);
let otherDate = new Date('2005-09-22 05:46:06');
otherDate = new Date('Sep 22 1996');
otherDate = new Date('08/22/2006 05:46:06');
console.log(otherDate);

let a;
a = otherDate.getDay();
a = otherDate.getMonth();
a = otherDate.getDate();
a = otherDate.getMinutes();
a = otherDate.getHours();
a = otherDate.getSeconds();
a = otherDate.getMilliseconds();
a = otherDate.getFullYear();
console.log(a);
otherDate.setDate(13);
otherDate.setMonth(13);
otherDate.setFullYear(2012);
otherDate.setMinutes(36);
otherDate.setHours(08);
otherDate.setSeconds(31);

console.log(otherDate);