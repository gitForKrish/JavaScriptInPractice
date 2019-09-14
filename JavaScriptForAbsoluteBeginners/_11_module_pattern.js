// Modular pattern with the concept of IIFE
let counter = (function(){
    // private stuffs
    let count = 0;
    function print(msg){
        console.log(msg + '--- '+ count);
    }

    // return object
    return {
        // value: count, // Create a Closure
        get: function(){
            return count;
        },
        set: function(value) {
            count = value;
        },
        increment: function(){
            count += 1;
            print('After increment: ');
        },
        reset: function() {
            print('Before reset: ');
            count = 0;
            print('After reset: ');
        }
    };
})();

console.log(counter.count);     // undefined
counter.increment();
counter.increment();
counter.increment();
//console.log(counter.value);
console.log(counter.get());
counter.set(8);
console.log(counter.get());
counter.increment();
counter.reset();

// Revealing modular pattern
let counter2 = (function(){    
    let count = 0;
    function print(msg){
        console.log(`${msg} => ${count}`);
    }
    function getCount(){
        return count;
    }
    function setCount(value){
        count = value;
    }
    function incrementCount(){
        count += 1;
        print('After increment: ');
    }
    function resetCount() {
        print('Before reset: ');
        count = 0;
        print('After reset: ');
    }

    return {
        // Revealing part
        get: getCount,
        set: setCount,
        increment: incrementCount,
        reset: resetCount
    };
})();
counter2.increment();
counter2.increment();
console.log(counter2.get());
counter2.set(8);
console.log(counter2.get());
counter2.increment();
counter2.reset();