const mongoose = require("mongoose");
const productConnection = require("../db/productDB");
const { v4: uuidv4 } = require("uuid");

const variantSchema = new Schema(
  {
    vuid: { type: String, index: true, default: uuidv4 },
    puid: String,
    attribute: [
      {
        key: String,
        value: String,
      },
    ],
    price: Number,
    stock: { type: Number, default: 0 },
    auid: String,
  },
  { timestamps: true }
);
const variantModel = productConnection.model("varients", variantSchema);
module.exports = variantModel;
