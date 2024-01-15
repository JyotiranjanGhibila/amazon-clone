const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { Users_Model } = require("../models/users.model");
const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
  try {
    const { name, mobile, email, pass } = req.body;
    if (!name || !mobile || !email || !pass) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }
    const user = await Users_Model.findOne({ email });
    if (user) {
      return res
        .status(404)
        .json({ success: false, message: "User already register" });
    } else {
      bcrypt.hash(pass, 5, async (err, hash) => {
        const user = new Users_Model({ name, mobile, email, pass: hash });
        await user.save();
        res
          .status(201)
          .json({ success: true, message: "Registration successful" });
      });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

userRouter.post("/signup", async (req, res) => {
  try {
    const { email, pass } = req.body;
    if (!email || !pass) {
      return res
        .status(400)
        .json({ success: false, message: "Email and password are required" });
    }
    const user = await Users_Model.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    const passwordMatch = await bcrypt.compare(pass, user.pass);

    if (passwordMatch) {
      const token = jwt.sign({ userId: user._id }, "bikash");
      return res.status(200).json({
        success: true,
        message: "Login successful",
        user: user.name,
        token: token,
      });
    } else {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });
    }
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
});

module.exports = { userRouter };
