const express = require("express");
const womenclothRoute = express();
const { womencloth_model } = require("../models/womencloths.model");

womenclothRoute.get("/cloth", async (req, res) => {
  try {
    const query = {};
    if (req.query.brand) {
      query.brand = req.query.brand;
    }
    if (req.query.material) {
      query.material = req.query.material;
    }

    const limit = 12;
    const page = parseInt(req.query.page) || 1;
    const skip = (page - 1) * limit;

    const products = await womencloth_model.find(query).skip(skip).limit(limit);
    res.send(products);
  } catch (err) {
    console.log("can not got datas");
    res.send(err, "somethings went wrong");
  }
});

womenclothRoute.get("/cloth/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const singelProd = await womencloth_model.find({ _id: id });
    res.send(singelProd);
  } catch (err) {
    console.log("er:-", err);
    res.send({ Msg: err.message });
  }
});

womenclothRoute.post("/add", async (req, res) => {
  try {
    const payload = req.body;
    const products = new womencloth_model(payload);
    await products.save();
    res.status(201).json({ msg: "Product added successfully" });
  } catch (err) {
    console.log(`can't add produc: ${err}`);
  }
});

module.exports = { womenclothRoute };
