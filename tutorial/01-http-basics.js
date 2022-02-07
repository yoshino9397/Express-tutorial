const express = require("express");
const app = express();
const path = require("path");

app.listen(5000, () => {
  console.log("server is listening on port 5000");
});

app.get("/", (req, res) => {
  console.log("get");
  res.status(200).send("home page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>resource not found</h1>");
});


app.use(express.static('./public'))