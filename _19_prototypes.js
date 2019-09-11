let originalCar = {
    make: 'bmw',
    model: '750li',
    year:2015
};

let newCar = Object.create(originalCar);
console.log(newCar.make);
newCar.make = 'bmw Series';
console.log(newCar.make);

let myPrototype = Object.getPrototypeOf(newCar);
console.log(myPrototype.make);

// adding new property in the prototype
myPrototype.doors = 4;
console.log(newCar.doors);

console.log(originalCar.hasOwnProperty('doors'));
console.log(newCar.hasOwnProperty('doors'));

console.log(newCar.whatever);