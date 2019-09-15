let x = 7;
console.log(typeof x); // number

let y = true;
console.log(typeof y); // boolean

let z = 'hello world';
console.log(typeof z); // string

let a;
console.log(a); // undefined as value
console.log(typeof a); // undefined as type

let sym = Symbol();
console.log(typeof sym);

// variable doesn't have datatype, it is the value that it store, defined the datatype
let changeDatatype = 10;
console.log(typeof changeDatatype); // number
changeDatatype = 'value is changed';
console.log(typeof changeDatatype); // string
changeDatatype = true;
console.log(typeof changeDatatype); // boolean
changeDatatype = undefined;
console.log(typeof changeDatatype); // undefined

let obj = {};
console.log(typeof obj);    // object

let arr = [];
console.log(typeof arr);    // object

let nothing = null;
console.log(typeof nothing);    // object

let car = {
    make: 'bmw',
    model: ['750li', '550Pi'],
    price: 500000,
    colors: [
        {'750li': 'red'},
        {'550Pi': 'white'}
    ],
    printPrice: function() {
        console.log(this.price);
    }
};
console.log(typeof car);                    // object
console.log(typeof car.make);               // string
console.log(typeof car.model);              // object
console.log(typeof car.price);              // number
console.log(typeof car.colors);             // object
console.log(typeof car.colors[0]);          // object
console.log(typeof car.colors[0]['750li']); // string
console.log(typeof car.printPrice);         // function

/*------------Primitive Types (Stored in Stack)------------*/
// String
// Number
// Boolean
// undefined
// null
// Symbol

/*-------------Reference Types (Stored in Heap)--------------*/
// Object literals
// Arrays
// Date
// RegExp
// Functions
// Anything else

/*
JavaScript is a dynamically typed language
- Types are associated with values not with variables
- The same variable can hold multiple types 
- No need to specify type while variable declaration
- TypeScript is a static typed language which is superset of JavaScript
*/