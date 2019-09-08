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