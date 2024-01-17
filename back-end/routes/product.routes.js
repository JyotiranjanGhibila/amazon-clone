const express = require("express");
const { product_Model } = require("../models/product.model");
const productRoute = express();

productRoute.get("/", async (req, res) => {
  try {
    const { category, page = 1, limit = 4 } = req.query;

    // Validate the page and limit parameters
    const pageNumber = parseInt(page);
    const limitNumber = parseInt(limit);

    if (
      isNaN(pageNumber) ||
      isNaN(limitNumber) ||
      pageNumber < 1 ||
      limitNumber < 1
    ) {
      return res.status(400).json({ error: "Invalid page or limit parameter" });
    }

    // Calculate the skip value based on the page and limit
    const skip = (pageNumber - 1) * limitNumber;

    // Query the database using the category and pagination parameters
    const result = await product_Model.findOne(
      {},
      { _id: 0, [category]: { $slice: [skip, limitNumber] } }
    );

    if (!result) {
      return res.status(404).json({ error: "Category not found" });
    }

    res.status(200).json(result[category]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

productRoute.post("/add", async (req, res) => {
  try {
    const payload = req.body;
    const product = new product_Model(payload);
    await product.save();
    res.status(201).json({ success: true, msg: "Product added successfully" });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

module.exports = { productRoute };
