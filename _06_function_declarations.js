function sayHello() {
    console.log('-----------------------');
    console.log('Hello');
    console.log('-----------------------');
}

console.log(typeof sayHello);   // function
sayHello();                     

let a = sayHello;       // assigning function name to refer for others
console.log(typeof a);  // function
a();                    // () is the function invocation operator

/*----------------------------------------------------------------------------*/
function sayHello(name) {
    console.log('-----------------------');
    console.log('Hello '+ name);
    console.log('-----------------------');
}
sayHello('Krish');

// let a = sayHello('Rum'); // SyntaxError: Identifier 'a' has already been declared
// a();

// let b = sayHello('Rum');
// b();             // TypeError: b is not a function

let c = sayHello;
console.log(typeof c);
c();
c('Rum');

/*----------------------------------------------------------------------------*/
function calculateTax(amount){
    let result = amount * 0.08;
    return result;
}

let tax = calculateTax(100);
console.log(tax);