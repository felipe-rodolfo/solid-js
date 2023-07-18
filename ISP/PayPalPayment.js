const OnlinePayment = require("./OnlinePayment.js");

class PayPalPayment extends OnlinePayment {
    constructor(user, password){
        super();
        this.user = user;
        this.password = password;
    }

    pay(){
        console.log('Paypal payment')
    }
}

module.exports = PayPalPayment;
