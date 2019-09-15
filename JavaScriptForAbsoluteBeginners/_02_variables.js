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

/* -------------------- using constant variable ----------------------------*/
const name = 'Krish';
console.log(name);

// Restriction 1. We can not do reassignment
// name = 'Tanmoy';  // TypeError: Assignment to constant variable.

// Restriction 2. Only variable decalaration is restricted, you need to initialize also
// const number; // SyntaxError: Missing initializer in const declaration
// number = 100;
// console.log(number);

// For Object and Array, it is possible to change the property or index value but reassignment is not allowed
const person = {firstName:'Krish', lastName:'Mandal', age:30};
console.log(person);

person.firstName = 'Tanmoy';
person.age = 31;
console.log(person);

// but this is not allowed 
// person = {name: 'Krish'}; // TypeError: Assignment to constant variable.
// console.log(person);

const numbers = [1,2,3,4,5];
console.log(numbers);

numbers.push(6);
console.log(numbers);

//but this is not allowed
// numbers = [10,11,12]; // TypeError: Assignment to constant variable.
// console.log(numbers);