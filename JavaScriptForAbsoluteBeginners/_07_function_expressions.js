console.log('function expressions will usually be anonymous.');

// calls a function or evaluates an expression after a specified number of milliseconds
setTimeout(function(){
    console.log('I waited for 2 secs');
}, 2000);

// function expressions doesn't have any name

let counter = 0;
function timeout() {    
    setTimeout( function(){
        console.log('Hi ' + counter++);
        timeout();
    }, 2000);   
    // timeout();  // RangeError: Maximum call stack size exceeded
}

timeout();

// Immediately Invoked Function Expression (IIFE)
// An Immediately Invoked Function Expression is a good way at protecting the scope of your function 
// and the variables within it.
(function(){
    console.log('Immediately Invoked Function Expression');
})();