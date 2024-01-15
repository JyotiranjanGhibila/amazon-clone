const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
const connection = require("./config/db");

const {userRouter} = require("./routes/users.routes");
const { womenclothRoute } = require("./routes/womencloth.routes");
const { cartRoute } = require("./routes/cart.routes");

app.use(cors());
app.use(express.json());


app.use("/user",userRouter)
app.use("/fashion",womenclothRoute)
app.use("/cart",cartRoute)

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log(`Connected to Database 🟢`);
  } catch (Err) {
    console.log(`Connection Failed 🔴: ${Err}`);
  }
  console.log(`server running on PORT ${process.env.PORT} 😜`);
});
