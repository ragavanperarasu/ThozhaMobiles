const mongoose = require('mongoose');
const productConnection = require('../db/productDB');

const variantSchema = new Schema({
  productId: { type: Schema.Types.ObjectId, ref: "Product", required: true },
  attribute: { type: String, required: true },
  value: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, default: 0 },
  assetIds: [{ type: Schema.Types.ObjectId, ref: "Asset" }],
  inStock: { type: Boolean, default: true },
}, { timestamps: true });
const variantModel = productConnection.model('varient',variantSchema);
module.exports = variantModel;