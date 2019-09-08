function one() {
    console.log('one');
}

one(); // method invocation - one

let callOne = one; // creating reference of the method One
callOne();

console.log(typeof one);    // function - so 'function' is a data type in Javascript like string, number, boolean, undefined
console.log(typeof callOne);// function

// function can return a function
function two(){
    return function (){ // function expression
        console.log('two');
    }
}
let callTwo = two(); // invoking the two method which return a function expression
callTwo();
// OR
two()();    // two times method invocations

// function return a function that in turn return a string
function three() {
    return function () {
        return 'three';
    }
}
console.log(three()());