const { Router } = require("express");
const { cartModel } = require("../models/cart.model");
const { authenticate } = require("../middlewares/authentication.middleware");

const cartRoute = Router();

cartRoute.get("/", authenticate, async (req, res) => {
  const { userId } = req.body;
  try {
    await cartModel
      .find({ userId })
      .populate("productId")
      .then((r) => {
        return res.status(200).send(r);
      });
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

cartRoute.delete("/delete/:id", async (req, res) => {
  const ItemID = req.params.id;

  try {
    const deleted = await cartModel.findByIdAndDelete({ _id: ItemID });
    if (deleted) {
      res.send({ success: true, message: `Item deleted` });
    } else {
      res.send({ success: false, message: `Error` });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

cartRoute.post("/add", authenticate, async (req, res) => {
  try {
    const cartItem = new cartModel(req.body);
    await cartItem.save();
    return res.status(200).send(cartItem);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

module.exports = { cartRoute };
