const mongoose = require('mongoose');
const productConnection = require('../db/productDB');
const assetSchema = new Schema({
  productId: { type: Schema.Types.ObjectId, ref: "Product", required: true },
  variantId: { type: Schema.Types.ObjectId, ref: "Variant" },
  url: { type: String, required: true },
  type: { type: String, enum: ["image", "video"], default: "image" },
}, { timestamps: true });
const assetModel = productConnection.model('asset',assetSchema);
module.exports = assetModel;