let a = 'first';

function scopeTest() {
    console.log(a);     // a is accessible here

    let b = 'second';   // born and die within the lexical scope { }
    if (a != ''){
        console.log(a);
        console.log(b);
        
        a = 'changed';
        console.log(a);

        let c = 'third';
        console.log(c);
    }
    console.log(a);
    console.log(b);
    // console.log(c);     // ReferenceError: c is not defined
}

scopeTest();
console.log('Outside of the ScopeTest method');
console.log(a);
// console.log(b);      // ReferenceError: b is not defined
// console.log(c);      // ReferenceError: c is not defined