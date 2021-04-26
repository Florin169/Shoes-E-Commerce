import mongoose from "mongoose";
import db from "./config/db.js";
import data from "./data/data.js";
import Products from "./modules/products.js";

db();

const importProducts = async () => {
  try {
    await Products.deleteMany();

    await Products.insertMany(data);

    console.log("Imported");
  } catch (error) {
    console.log(error);
  }
};

const deleteProducts = async () => {
  try {
    await Products.deleteMany();

    console.log("deleted");
  } catch (error) {
    console.log(error);
  }
};

if (process.argv[2] === "-d") {
  deleteProducts();
} else {
  importProducts();
}
