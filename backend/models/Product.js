const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  batchNo: { type: String, required: true,unique: true},
  productName: { type: String, required: true },
  qty: { type: String, required: true },
  price:{ type: String, required: true },
  category: { type: String, enum: ["Men", "Women", "Kids"], required: true },
  Type: { type: String, enum: ["Top", "Low"], required: true },
  DateofAdded: { type: String, required: true },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
