// string creation
var hello = 'Hello';            // Single Quote
var world = "World";            // Double Quote
var helloWorld = `Hello World`; // Template literals introduced in ES6

// Other types to String
var intStr1 = String(255);
var intStr2 = (5325).toString();

var boolStr1 = String(true);
var boolStr2 = (false).toString();

var nullStr1 = String(null);
var undefinedStr1 = String(undefined);

var objStr = ({}).toString();

// String.fromCharCode method
var hello = String.fromCharCode(104,101,108,108,111);  //"hello"

var str = 'string';
console.log(str.split('').reverse().join(''));

console.log([...String(str)].reverse().join(''));
console.log([...String('1,2,3')].reverse().join(''));


