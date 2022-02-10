const express = require("express");
const app = express();
const { products } = require("./data");

app.listen(5000, () => {
  console.log("server is listening on port 5000");
});

app.get("/", (req, res) => {
  res.json(products);
});

app.get("/", (req, res) => {
  res.send('<h1>Home Page</h1><a href="/api/products">products</a>');
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProducts);
});

app.get("/api/products/:productID", (req, res) => {
  console.log(req);
  console.log(req.params);
  const singleProducts = products.find((product) => product.id === 1);
  res.json(singleProducts);
});

