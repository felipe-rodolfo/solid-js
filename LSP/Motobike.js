const Vehicle = require('./Vehicle');

class Motobike extends Vehicle {
    constructor(color, km, rump){
        super();
        this.color = color;
        this.km = km;
        this.rump = rump;
    }

    hasRump(){
        return this.rump;
    }
}

module.exports = Motobike;