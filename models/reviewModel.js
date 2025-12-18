const mongoose = require('mongoose');
const productConnection = require('../db/productDB'); 
const reviewSchema = new Schema({
  productId: { type: Schema.Types.ObjectId, ref: "Product", required: true },
  customerId: { type: Schema.Types.ObjectId, ref: "Customer", required: true },
  rating: { type: Number, required: true, min: 0, max: 5 },
  review: { type: String },
  images: [{ type: Schema.Types.ObjectId, ref: "Asset" }],
}, { timestamps: true });

const reviewModel = productConnection.model('review',reviewSchema);

module.exports = reviewModel;