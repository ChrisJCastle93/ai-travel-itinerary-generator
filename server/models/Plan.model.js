const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the plan model to whatever makes sense in this case
const planSchema = new Schema(
  {
    planType: {
      type: String,
      enum: ["Plan 1", "Plan 2"],
    },
    price: Number,
    currency: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

const Plan = model("Plan", planSchema);

module.exports = Plan;
