const OnlinePayment = require("./OnlinePayment.js");

class CreditCardPayment extends OnlinePayment{

    constructor(cardNumber){
        super();
        this.cardNumber = cardNumber;
    }

    queryCardViaNumber(){
        console.log('consulting credi card limit');
    }

    pay(){
        console.log('Credit Card Payment');
    }

}

module.exports = CreditCardPayment;