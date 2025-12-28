const mongoose = require("mongoose");
const productConnection = require("../db/productDB");
const variantSchema = new Schema(
  {
    puid:mongoose.Schema.Types.ObjectId,
    atr: [
      {
        key: String,
        value: String,
      },
    ],
    price: Number,
    stock: { type: Number, default: 0 },
    auid:mongoose.Schema.Types.ObjectId,
  },
  { timestamps: true }
);
const variantModel = productConnection.model("varients", variantSchema);
module.exports = variantModel;
