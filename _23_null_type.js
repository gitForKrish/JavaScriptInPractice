let a;
console.log(a);
console.log(typeof a);

let pattern = /xyz/;
let testString = 'this is a test string';
let result = testString.match(pattern);
console.log(result);
console.log(typeof result);

if  (result === null){
    console.log('no match are found');
}

// a variable is null signifies that it expects a object reference but nothing is set.