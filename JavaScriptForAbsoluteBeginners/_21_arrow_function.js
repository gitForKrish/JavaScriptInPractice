let hi = () => {console.log('hi');}
hi();

hi = (name) => {console.log(`hello ${name}`);}
hi('Jack');

let add = (a, b) => { return a+b;}
console.log(add(7,3));

let names = ['alex', 'david', 'thomas', 'kali'];
names.map((name) => {console.log(name);});

let tranformed = names.map((name) => {return `Hello ${name}`;});
console.log(tranformed);
