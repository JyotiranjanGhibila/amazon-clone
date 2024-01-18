const { Schema, model } = require("mongoose");

const orderSchema = new Schema(
  {
    name: { type: String },
    amount: { type: Number },
    order_id: { type: String },
    razorpay_payment_id: { type: String, default: null },
    razorpay_order_id: { type: String, default: null },
    razorpay_signature: { type: String, default: null },
  },
  {
   timestamps:true,
  }
);

const order_model = model("order", orderSchema);

module.exports = { order_model };
