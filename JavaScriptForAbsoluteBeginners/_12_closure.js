// A closure gives you access to an outer function’s scope from an inner function. 
function sayHello(name) {
    return function() { // sayHello returns a function with it own closing scope
        console.log(`Hello ${name}`);
    };
}

// Closures are created every time a function is created, at function creation time.
let ram = sayHello('Ram');  
let shyam = sayHello('Shyam');
let jack = sayHello('Jack');

// The inner function will have access to the variables in the outer function scope, even after the outer function has returned.
ram();
shyam();
jack();