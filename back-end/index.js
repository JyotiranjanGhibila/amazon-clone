const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
const connection = require("./config/db");

app.use(cors());
app.use(express.json());

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log(`Connected to Database 🟢`);
  } catch (Err) {
    console.log(`Connection Failed 🔴: ${Err}`);
  }
  console.log(`server running on PORT ${process.env.PORT} 😜`);
});
