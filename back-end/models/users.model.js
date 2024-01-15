const mongoose = require("mongoose");

const Users_Schema = mongoose.Schema(
  {
    name: { type: String, require: true },
    mobile: { type: Number },
    email: { type: String, require: true },
    pass: { type: String, require: true },
  },
  {
    versionKey: false,
  }
);

const Users_Model = mongoose.model("Users", Users_Schema);

module.exports = { Users_Model };
