const express = require("express");
const app = express();
const {products}=require("./data")

app.listen(5000, () => {
  console.log("server is listening on port 5000");
});

app.get("/", (req, res) => {
  res.json(products);
});

///5:33:36