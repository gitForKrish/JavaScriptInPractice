// class declaration
class Car{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    print(){
        console.log(`${this.make} ${this.model} (${this.year})`)
    }
}

let myCar = new Car('bmw', '750li', 2015);
myCar.print();

// inheritance
class SportCar extends Car{
    revEngine(){
        console.log('vroooom goes the ' + this.model);
    }
}
let mySportCar = new SportCar('dodge', 'vipher', '2011');
mySportCar.print();
mySportCar.revEngine();

//myCar.revEngine();  // TypeError: myCar.revEngine is not a function