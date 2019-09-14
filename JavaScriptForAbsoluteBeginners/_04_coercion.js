let a = 7;
let b = '6';
let c = a + b;
console.log(c); // 76

let d = b + a;
console.log(d); // 67 

let e = a + parseInt(b, 10);
console.log(e); // 13

console.log(parseInt('hello', 10)); // NaN - Not a Number, instead of throwing any error
// parseInt - convert a string to an integer.

let f = parseInt('hi', 10);
let g = isNaN(f);   // isNaN - Returns a Boolean value that indicates whether a value is the reserved value NaN (not a number).
console.log(g);     // true

// Explicit conversion
let year = 1989;
console.log(year.toString());  // 1989
//toString() - Returns a string representation of an object.

//OR
console.log(String(year)); // 1989
// String() - Allows manipulation and formatting of text strings and determination and location of substrings within strings.


/* Addition operator + in JavaScript automagically converts any of the two operands to a string if at least one of them is … a string */
/* If x is String or y is String then return ToString(x) followed by ToString(y) */

console.log('hello' + 50);      // hello50
console.log('hello' + []);      // hello
console.log('hello' + [50]);    // hello50
console.log([50,50].toString());    // 50,50
console.log('hello' + [50, 50]);    // hello50,50
console.log('hello' + [50, 56.789, 'what?']);   //hello50,56.789,what?

let myObj = {name: 'Krish'};
console.log(String(myObj));     // [object Object]
console.log(myObj.toString());  // [object Object]
/* when you call toString() on a plain JavaScript object the engine gives “[object Object]”
because the default behavior of Object.toString() is to return the string object followed by the entity type (Object in this case). */

console.log('hello' + myObj);   // hello[object Object]

let num = 50;
console.log(num.toString());    // default behavior of Object.toString() has been overridden in number 

console.log(Object.toString()); // function Object() { [native code] }


/* -------------- Type coercion in JavaScript ------------------ */
// (double equal) == : weak comparison or abstract comparison operator
// (triple equal) === : strong comparison or strict comparison operator

console.log("hello" == "hello" ); // true
console.log("hello" === "hello" );// true

console.log("1" === 1 ); // false
console.log("1" == 1 ); // true
/* the abstract comparison operator makes an automatic conversion between types, before comparing them */
/* The comparison x == y is performed as follows: if x is String and y is Number return the result of the comparison Number(x) == y */
console.log(1 == "1" ); // true
console.log(Number('50')); // 50

// Best practice : avoid the abstract comparison operator in your JavaScript code
// use strict comparison operator as no automatic conversion is made before comparing values.   
