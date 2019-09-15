let x;
console.log(x); // undefined - Variable is declared but not defined yet.

x = 7;
x = 9;
console.log(x); // 9 

let y = 11;
let z = x + y; // + operator works as Addition 
console.log('Answer: ' + z); // + operator works as concatenation

// You can not use keywords as identifier
// let let = 8; //SyntaxError: let is disallowed as a lexically bound name

// Use camel casing for name
let firstNumber = 10;
let secondNumber = 15;

// using constant variable
const name = 'Krish';
console.log(name);

// 1. We can not do reassignment
// name = 'Tanmoy';  // TypeError: Assignment to constant variable.

// 2. Only variable decalaration is restricted, you need to initialize also
// const number; // SyntaxError: Missing initializer in const declaration
// number = 100;
// console.log(number);