require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

const productsRouter = require("./routes/products");
app.use("/products", productsRouter);

mongoose.connect(process.env.DATABASE_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (err) => {
  console.log(err);
});
db.once("open", () => console.log("Database Connected"));

app.use(express.json());

app.listen(3000, () => console.log("Server Running at http://localhost/3000"));
