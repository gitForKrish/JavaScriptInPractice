let names = ['hello', 'hi', 'how', 'are', 'you', '?'];
let others = ['i', 'am', 'fine', '.'];

let numbers = [4,8,3,7,9,6,10,45,23,78];
let fibonacci = [1,1,2,3,5,8,13,21,34,55];

let combine = numbers.concat(fibonacci);
console.log(combine);

console.log(fibonacci.join('~'));

console.log(names.shift());
console.log(names);

console.log(names.unshift('hello'));
console.log(names);

console.log(others.reverse());
console.log(numbers.sort());

console.log(names.indexOf('how'));

console.log(fibonacci.lastIndexOf(1));

console.log(fibonacci.filter((x) => {if (x <= 15) return x;}));

names.forEach((name) => console.log(name));

console.log(fibonacci.every((num) => num < 50));
console.log(fibonacci.every((num) => num < 60));

console.log(fibonacci.some((num) => num > 50));
console.log(fibonacci.some((num) => num > 60));