/*-------------------To String----------------------*/
let str;
str = String(555);
str = String(4+4);
str = String(true);
str = String(undefined);
str = String(null);
str = String(Symbol());
str  = String(new Date());
str = String([1,2,3,4]);

// toString method
str = (5).toString();
str = (true).toString();
str =[1,2,3,4].toString();

// Output
// console.log(str);
// console.log(typeof str);
// console.log(str.length);

/*-------------------To Number----------------------*/
let val;
val = Number();
val = Number('55');
val = Number(true);
val = Number('true');
val = Number(undefined);
val = Number(null);
val = Number([1,2,3]);

val = parseInt('100.35');
val= parseFloat('100.35');

// Output
console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));