let a = [4,8,16,42,52];
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

a.push(80);
console.log(a);             // [ 4, 8, 16, 42, 52, <5 empty items>, 77, 80 ]
a.pop();
a.pop();
a.pop();
a.pop();
a.pop();
console.log(a);             // [ 4, 8, 16, 42, 52, <2 empty items> ]

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
console.log(e.length);      // 1