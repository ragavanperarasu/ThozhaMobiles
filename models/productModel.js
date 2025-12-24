const mongoose = require("mongoose");
const productConnection = require("../db/productDB");
const productSchema = new Schema(
  {
    name: String,
    brand: String,
    des: String,
    sdes: String,
    cat: String,
    scat: String,
    tags: [{ type: String }],
    keys: [{ type: String }],
    mimg: { type: String },
    pri: Number,
    dis: { type: Number, default: 0 },
    stock: { type: Number, default: 0 },
    isFeat: { type: Boolean, default: false },
    avgrat: { type: Number, default: 0 },
    revc: { type: Number, default: 0 },
  },
  { timestamps: true }
);
const productModel = productConnection.model("products", productSchema);
module.exports = productModel;
