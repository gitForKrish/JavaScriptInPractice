let first = 'Knowledge is power.';
let second = 'Do or do not. There is no try.'
let third = '4,78,52,65,42,12,85';

// you can call string methods on string literals
console.log('hello there'.toUpperCase());

let mySplit = third.split(',');
console.log(mySplit);

let mySlice = first.slice(13, 18);
console.log(mySlice);

let mysubStr = first.substr(13,5);
console.log(mysubStr);

let myEndsWith = second.endsWith('try.');
console.log(myEndsWith);

let myStartsWith = second.startsWith('Do');
console.log(myStartsWith);

let myInclude = second.includes('There');
console.log(myInclude);

let myRepeat = 'Ha! '.repeat(3);
console.log(myRepeat);

let myTrim = '       Hello      ';
console.log(myTrim.length);
console.log(myTrim.trim().length);
