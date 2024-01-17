const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    mob: [{ type: Object,require:true }],
    elec: [{ type: Object , require:true}],
    womencloth: [{ type: Object ,require:true}],
  },
  {
    versionKey: false,
  }
);

const product_Model = model("products", productSchema);

module.exports = { product_Model };
