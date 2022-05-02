const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the payment model to whatever makes sense in this case
const paymentSchema = new Schema(
  {
    status: Boolean,
    startDate: Date,
    renewalDate: Date,
    history: [],
    billingAddress: {
        name: String,
        street1: String,
        street2: String,
        city: String,
        country: String,
        postalCode: String,
    } 
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Payment = model("Payment", paymentSchema);

module.exports = Payment;
