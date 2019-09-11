let pattern = /xyz/;
console.log(pattern);
console.log(typeof pattern);

let value = 'this is a xyz test';
console.log(pattern.test(value));   // true

console.log(value.replace(pattern, 'just'));

console.log(value.match(pattern));
console.log(value.match(pattern).index);