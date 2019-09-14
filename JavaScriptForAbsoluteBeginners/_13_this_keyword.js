/* 
function first(){
    return this;
}
console.log(first() === global); */

/* 
function second(){
    'use strict'
    return this;
}
console.log(second() === global);
console.log(second() === undefined); */

/* 
let myObject = {value: 'My Object'};
global.value = 'Global object';

function third() {
    return this.value;
}
console.log(third());
console.log(third.call(myObject)); // myObject will be bind to this
console.log(third.apply(myObject));
 */

/*  
// 'this' depends on HOW a function is called
// An object can be passed as the first argument to CALL or APPLY functions and 'this' will be bound to it
let myObj = {prop: 'My Object'};
global.prop = 'Global object'; 

function fourth(name) {
    return this.prop + name;
}
console.log(fourth('jack'));
console.log(fourth.call(myObj, 'jack'));
console.log(fourth.apply(myObj, ['jack']));
 */

/* let fifth = function() { 
    console.log(this.firstName + ' ' + this.lastName);  // 'this' will bind based on the context
}   // Interesting fact is that fifth function doesn't take any parameters 
    // but based on the context (like customer1 or customer2), you are able to use properties like firstName and lastName.

let customer1 = {
    firstName: 'Krish',
    lastName: 'Mandal',
    print: fifth
}
let customer2 = {
    firstName: 'Tanmoy',
    lastName: 'Mandal',
    print: fifth
}

customer2.print();  // this will bind with customer2 here
customer1.print();  // this will bind with customer1 here */

const person = {
    isHuman: false,
    printIntroduction: function(){
        console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
}
const me = Object.create(person);   // creates a new object, using an existing object as the prototype of the newly created object
me.name = 'Krishnendu';
me.isHuman = true;

me.printIntroduction();