const { Schema, model } = require("mongoose");

const cartSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    productId: { type: Schema.Types.ObjectId, ref: "product" },
    img: { type: String, require: true },
    title: { type: String, require: true },
    desc: { type: String, require: true },
    price: { type: Number, require: true },
    qty: { type: Number, default: 1 },
    userId:{type:String}
  },
  {
    versionKey: false,
  }
);

const cartModel = model("cart", cartSchema);
module.exports = { cartModel };
