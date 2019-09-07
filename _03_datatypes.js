let x = 7;
console.log(typeof x); // number

let y = true;
console.log(typeof y); // boolean

let z = 'hello world';
console.log(typeof z); // string

let a;
console.log(a); // undefined as value
console.log(typeof a); // undefined as type

// variable doesn't have datatype, it is the value that it store, defined the datatype
let changeDatatype = 10;
console.log(typeof changeDatatype);
changeDatatype = 'value is changed';
console.log(typeof changeDatatype);
changeDatatype = true;
console.log(typeof changeDatatype);
changeDatatype = undefined;
console.log(typeof changeDatatype);