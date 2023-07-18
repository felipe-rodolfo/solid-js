const CreditCardPayment = require("./CreditCardPayment.js");
const PayPalPayment = require("./PayPalPayment.js");

const payCrediCard = new CreditCardPayment(123456789);
const payPal = new PayPalPayment('user', 12345);
console.log(payCrediCard.pay());
console.log(payPal.pay());
