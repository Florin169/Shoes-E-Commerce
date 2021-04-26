import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: Array,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  qty: {
    type: Array,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Products = mongoose.model("Products", schema);

export default Products;
