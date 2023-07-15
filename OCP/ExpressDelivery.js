const Delivery = require("./Delivery.js");
class ExpressDelivery extends Delivery {
    performService(){
        console.log("Perform service");
    }
    calculateDeliveryTime() {
        console.log("Calculating time delivery express");
    }
}

module.exports = ExpressDelivery;