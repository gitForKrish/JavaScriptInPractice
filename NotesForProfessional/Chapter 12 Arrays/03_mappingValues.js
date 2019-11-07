// map() - generate an array from an existing one

// Array of string -> array of length of each string
console.log(['one', 'two', 'three', 'four'].map(function(value, index, arr){ return value.length;}));
// Map method() - 
// value: current element of the array
// index: current index of the array
// arr: whole arr

// Short hand method
console.log(['one', 'two', 'three', 'four'].map(value => value.length));