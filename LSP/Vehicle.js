class Vehicle {
    constructor(color, km){
        this.color = color;
        this.km = km;
    }

    brake(){
        console.log('hold on');
    }

    speedUp(){
        console.log('Vruuum!');
    }
}

module.exports = Vehicle;