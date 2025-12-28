const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: String,
    brand: String,
    des: String,
    sdes: String,
    cat: String,
    scat: String,
    tags: [String],
    keys: [String],
    pri: Number,
    mimg: String
  },
  { timestamps: true }
);

module.exports = (connection) =>
  connection.model("Product", productSchema);
