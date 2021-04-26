import express from "express";
import db from "./config/db.js";
import Products from "./modules/products.js";

const app = express();

db();

app.get("/", (req, res) => {
  res.send("Running....");
});

app.get("/products", async (req, res) => {
  try {
    const products = await Products.find({});

    res.json(products);
  } catch (error) {
    console.log(error);
  }
});

app.get("/products/:id", async (req, res) => {
  try {
    const product = await Products.findById(req.params.id);

    res.json(product);
  } catch (error) {}
});

app.listen(5000, console.log("Server running on port 5000"));
