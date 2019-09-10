/* let myString = new String('hello'); // 'hello' string is a primitive type whereas String is a native type of string
console.log(myString);          // [String: 'hello']
console.log(typeof myString);   // object
console.log(myString.toString());   // hello
console.log(myString.valueOf());    // hello, valueOf() convert from native to primitive type */

// built-in/native types provides all the methods like toString(), replace() etc.

// List of built in /native types that has primitive version
/*
    - String()
    - Number()
    - Boolean()
    - Object()
    - Function()
    - Symbol()
*/

// List of built in /native types that do not have primitive version
/*
    - Array()
    - RegExp()
*/

// List of built in /native types that provide foundational structure
/*
    - Date()
    - Error()
*/

/* let myPrimitive = 'THIS IS CRAZY';
myPrimitive = myPrimitive.toLowerCase(); // myPrimitive will first coerced to native then method will be invoked
 */
let myNumber = new Number(10);
console.log(typeof myNumber);
console.log(myNumber);
let myPrimitive = myNumber.valueOf();
console.log(typeof myPrimitive);
console.log(myPrimitive);