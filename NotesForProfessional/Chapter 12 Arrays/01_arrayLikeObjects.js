let arrayLike = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3
};

// Converting to real array

// Using Array.from
let realArray1 = Array.from(arrayLike);
console.log(arrayLike);
console.log(realArray1);

// Using Object.values
let realArray2 = Object.values(arrayLike);
console.log(arrayLike);
console.log(realArray2);

// Using Object.keys
let realArray3 = Object
    .keys(arrayLike)
    .map((key) => arrayLike[key]);
console.log(arrayLike);
console.log(realArray3);