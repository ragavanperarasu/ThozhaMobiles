const mongoose = require('mongoose'); 
const productConnection = require('../db/productDB'); 



const productSchema = new Schema({
  name: { type: String, required: true },
  brand: { type: String },
  description: { type: String },
  shortDescription: { type: String },
  category: { type: String },
  subCategory: { type: String },
  tags: [{ type: String }],
  keywords: [{ type: String }],
  thumbnail: { type: Schema.Types.ObjectId, ref: "Asset" },
  price: { type: Number, required: true },
  discount: { type: Number, default: 0 },
  stock: { type: Number, default: 0 },
  minStock: { type: Number, default: 0 },
  isFeatured: { type: Boolean, default: false },
  averageRating: { type: Number, default: 0 },
  reviewCount: { type: Number, default: 0 },
  sellerId: { type: Schema.Types.ObjectId, ref: "Seller", required: true },
  variantIds: [{ type: Schema.Types.ObjectId, ref: "Variant" }],
  reviewIds: [{ type: Schema.Types.ObjectId, ref: "Review" }],
}, { timestamps: true });




const productModel = productConnection.model('product', MqttSchema);

module.exports = mqttproductModel;