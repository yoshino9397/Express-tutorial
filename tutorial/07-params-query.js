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
  // console.log(req);
  // console.log(req.params);
  const { productID } = req.params;
  const singleProducts = products.find(
    (product) => product.id === Number(productID)
  );
  if (!singleProducts) {
    return res.status(404).send("Not exist");
  }
  res.json(singleProducts);
});

app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
  console.log(req);
  res.send("Hello world");
});

app.get("/api/v1/query", (req, res) => {
  // console.log(req.query);
  const { search, limit } = req.query;
  let sortedProducts = [...products];
  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  if (sortedProducts.length < 1) {
    res.status(200).send("no products matched your search");
    return res.status(200).json({ success: true, data: [] });
  }
  res.status(200).json(sortedProducts);
});
