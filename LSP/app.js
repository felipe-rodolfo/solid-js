const Car = require('./Car.js');
const Motobike = require('./Motobike.js');

const newCar = new Car('blue', 25000, 4);
console.log(newCar.speedUp());

const newMotobike = new Motobike('black', 17000, false);
console.log(newMotobike.hasRump());