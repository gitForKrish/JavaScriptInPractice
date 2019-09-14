/* let car = {
    make: 'bmw',
    model: '750li',
    year: 2010
}

function Car (make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
}
let myCar = new Car('bmw','750li', 2010);
console.log(myCar);
console.log(typeof car); */

function MyFunction(){
    console.log('I am a simple function');
}

let myFunction = new MyFunction();
console.log(typeof myFunction); // object
console.log(typeof MyFunction); // function

// We can't do this as myFunction is an object
// myFunction();   // TypeError: myFunction is not a function

console.log(myFunction.valueOf());  // MyFunction {}
