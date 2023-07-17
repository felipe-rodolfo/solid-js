const Vehicle = require('./Vehicle');

class Car extends Vehicle {
    constructor(color, km, doors){
        super();
        this.color = color;
        this.km = km;
        this.doors = doors;
    }
}

module.exports = Car;