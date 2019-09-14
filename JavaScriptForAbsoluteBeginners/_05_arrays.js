/* let a = [4,8,16,42,52];
console.log(a[0]);          // 4
console.log(a);             // [4, 8, 16, 42, 52]
console.log(a.length);      // 5
console.log(typeof a);      // object
console.log(a.toString());  // 4,8,16,42,52
console.log(String(a));     // 4,8,16,42,52

console.log(a[10]);         // undefined
a[10] = 77;
console.log(a);             // [ 4, 8, 16, 42, 52, <5 empty items>, 77 ]
console.log(a.length);      // 11

// Add to the end of an Array
a.push(80);
console.log(a);             // [ 4, 8, 16, 42, 52, <5 empty items>, 77, 80 ]

// Remove from the end of an Array
a.pop();
a.pop();
a.pop();
a.pop();
a.pop();
console.log(a);             // [ 4, 8, 16, 42, 52, <2 empty items> ]

// remove element from the front
a.shift();                  
console.log(a);             // [ 8, 16, 42, 52, <2 empty items> ]

// add element to the front 
a.unshift(10);    
console.log(a);             // [ 10, 8, 16, 42, 52, <2 empty items> ]

// Find the index of an item in the Array
console.log(a.indexOf(10)); // 0

// Loop over an Array
a.forEach(function(item, index){
    console.log('Index: ' + index + ', Value: ' + item);
});

// Remove an item by index position
a.splice(3,1);
console.log(a);             // [ 10, 8, 16, 52, <2 empty items> ]

// Copy an Array
let shallowCopy = a.slice();
console.log(shallowCopy);   //[ 10, 8, 16, 52, <2 empty items> ]

let b = [12, 'Alex', true]; // array can hold different types of values
console.log(b);             // [ 12, 'Alex', true ]

let c = new Array(10,20,30,40,50);
console.log(c);             // [ 10, 20, 30, 40, 50 ]
console.log(c.length);      // 5

let d = new Array(5);       // Be careful here, it doesn't create array of single element
console.log(d);             // [ <5 empty items> ]
console.log(d.length);      // 5

let e = new Array('Hello');
console.log(e);             // [ 'Hello' ]
console.log(e.length);      // 1 */

// The Definitive Guide Step by Step
/*-------------------------------------------------------------------------------------------------------------------------------------------- */
/* 
- An Array is an ordered collection of 'UNTYPED' values.
- JavaScript arrays are 'dynamic': they grow or shrink as needed.
- JavaScript arrays are zero-based and use 32-bit indexes - first element is at 0, and the highest possible index is 4294967294 (23^2−2).
- JavaScript arrays may be 'sparse': the elements need not have contiguous indexes and there may be gaps.
- JavaScript arrays are a specialized form of 'JavaScript object'.
- Arrays inherit properties from 'Array.prototype', which defines a rich set of array manipulation methods.
- Every JavaScript array has a 'length' property.
*/

/* // Creating Arrays
let emptyArray = [];
console.log(emptyArray);
console.log(emptyArray.length);

let noValueArray = [,,];    // Array containing 2 empty values
console.log(noValueArray);
console.log(noValueArray.length);
console.log(noValueArray[1]);   // omitted element is given the value undefined

let omittedArray = [5,,,8];
console.log(omittedArray);
console.log(omittedArray.length);

let numericArray = [7,8,2,9,4,6];
console.log(numericArray);
console.log(numericArray.length);

let untypedArray = ['hello', 100, true, undefined, null, {x:30, y: 40}, [50.25,60.89], ()=>{'arrow function'} ];
console.log(untypedArray);
console.log(untypedArray.length);

// The values in an array literal need not be constants
let base = 100;
let baseArray = [base, base+2, base+4, base+10];
console.log(baseArray);

// Create an array is with the Array() constructor
let a = new Array();    // no argument - define empty array
console.log(a);

let b = new Array(10);  // single numeric argument - define array size
console.log(b);
console.log(b.length);

let c = new Array(15,20);   // more than one arguments - define array elements
console.log(c);
console.log(c.length);

let d = new Array('Hello'); // single nonnumeric argument - define array element
console.log(d);
console.log(d.length);

let e = new Array('h1',8,9,true,undefined); 
console.log(e);
console.log(e.length); */

let number = [7,8,2,9,4,6];
console.log(number[-2]);
number[-2] = 50;
console.log(number[-2]);
console.log(number);    // [ 7, 8, 2, 9, 4, 6, '-2': 50 ]
// property names that are non-negative integers less than 2^32, the array automatically maintains the value of the length property
console.log(number.length); // 6 -> notice '-2' is not included here
// JavaScript arrays are a specialized form of JavaScript object.
// JavaScript converts the numeric array index to a string 
// — the index 1 becomes the string "1"—then uses that string as a property name
// number[5] = 10 -> number.'5' = 10 
console.log(number['1']);
number['20'] = 20;      // 20 will be assigned to array index 20
console.log(number.length)
console.log(number);

number[15.00] = 15;     // 15 will be assigned to array index 15
console.log(number.length)
console.log(number);

number[16.58] = 16;     // 16 will be assigned to a property to "16.58"
console.log(number.length)
console.log(number);