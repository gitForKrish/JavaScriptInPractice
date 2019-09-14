let car = {
    make: 'bmw',
    model: '745li',
    year: 2015,
    getPrice: function(){
        return 5000000;
    },
    printDescription: function(){
        console.log(this.make + ' ' + this.model);
    }
}

car.printDescription();
console.log(car.year);      // using member access operator
console.log(car['make']);   // using indexer

console.log(car[1]);        // undefined - it try to access property 1
car['color'] = 'red';       // it will add color property to the object and set it value to red
console.log(car['color']);  // red

// as javascript is dynamically typed language
let anotherCar = {};
anotherCar.whatever = 'whatever property';
anotherCar['where ever'] = 'where ever property';
console.log(anotherCar.whatever);
console.log(anotherCar['where ever']);

// nested objects
let a = {
    myProperty: { b:'hi' } // myProperty is of object type
}
console.log(a.myProperty.b);

let b = {
    myProperty: [
        true,
        'hello',
        {e: 'crazy'},
        50,
        [4,6]
    ]
}
console.log(b.myProperty[2].e);
console.log(b.myProperty);
console.log(b.myProperty.toString());

// Three ways to create objects
let obj1 = {};
let obj2 = new Object();
let obj3 = Object.create(obj2); // creates a new object, using an existing object as the prototype of the newly created object

console.log(obj1);
console.log(obj2);
console.log(obj3);
 
/* Categories of JavaScript objects:
- native object: defined by the ECMAScript specification. Eg: Objects, Arrays, functions, dates, and regular expressions.
- host object: defined by the host environment (such as a web browser) within which the JavaScript interpreter is embedded.
        Eg: HTMLElement objects that represent the structure of a web page in client-side JavaScript are host objects.
        Host objects may also be native objects.
- user-defined object: any object created by the execution of JavaScript code.
*/

/* Prototypes:
- Every JavaScript object has a second JavaScript object associated with it. 
- This second object is known as a prototype, and the first object inherits properties from the prototype.
*/