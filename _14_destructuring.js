let a,b,c,d,e;
let others;
let names = ['jack', 'alex', 'ramu', 'ganu', 'anu'];

/* 
[a,b,d,c,e] = names;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e); 
*/

/* 
[a,b,...others] = names;
console.log(a);
console.log(b);
console.log(others); */

/* [a,...others,b] = names;  // SyntaxError: Rest element must be last element
console.log(a);
console.log(b);
console.log(others); */

/* [a,b,d,c,e,...others] = names;
console.log(a);
console.log(e);
console.log(others); */

/* let year, model;
({year, model} = {
    model: '750li',
    make: 'bmw',
    year: 2015,
    price: 500000
});
console.log(year);
console.log(model); */