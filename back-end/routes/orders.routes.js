const express = require("express");
const Razorpay = require("razorpay");
const crypto = require("crypto");
const { order_model } = require("../models/orders.model");
const checkoutRout = express.Router();

const razorpay = new Razorpay({
  key_id: process.env.KEY_ID,
  key_secret: process.env.KEY_SECRET,
});

checkoutRout.post("/checkout", async (req, res) => {
  const { name, amount } = req.body;

  const order = await razorpay.orders.create({
    amount: Number(amount * 100),
    currency: "INR",
  });

  await order_model.create({
    order_id: order.id,
    name: name,
    amount: amount,
  });
  console.log({ order });
  res.json(order);
});

checkoutRout.post("/payment-verification", async (req, res) => {
  const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
    req.body;

  const body_data = razorpay_order_id + "|" + razorpay_payment_id;
  const exprect = crypto
    .createHmac("sha256", process.env.KEY_SECRET)
    .update(body_data)
    .digest("hex");

  if (exprect === razorpay_signature) {
    await order_model.updateOne(
      { order_id: razorpay_order_id },
      {
        $set: {
          razorpay_payment_id,
          razorpay_order_id,
          razorpay_signature,
        },
      }
    );
    res.redirect(
      `https://amazon-clone-jyoti.vercel.app/payment/success?payment_id=${razorpay_payment_id}`
    );
    return;
  } else {
    res.redirect("https://amazon-clone-jyoti.vercel.app/payment/failed");
    return;
  }
});

module.exports = { checkoutRout };
