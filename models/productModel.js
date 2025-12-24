<<<<<<< HEAD
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
=======
const mongoose = require('mongoose'); 
const productConnection = require('../db/productDB'); 



const productSchema = new Schema({
  name: String,
  brand: String ,
  description: String,
  shortDescription: String,
  category: String,
  subCategory: String,
  tags: [{ type: String }],
  keywords: [{ type: String }],
  thumbnail: { type: Schema.Types.ObjectId, ref: "Asset" },
  price: { type: Number },
  discount: { type: Number, default: 0 },
  stock: { type: Number, default: 0 },
  minStock: { type: Number, default: 0 },
  isFeatured: { type: Boolean, default: false },
  averageRating: { type: Number, default: 0 },
  reviewCount: { type: Number, default: 0 },
  sellerId: { type: Schema.Types.ObjectId, ref: "Seller" },
  variantIds: [{ type: Schema.Types.ObjectId, ref: "Variant" }],
  reviewIds: [{ type: Schema.Types.ObjectId, ref: "Review" }],
}, { timestamps: true });




const productModel = productConnection.model('product', MqttSchema);

module.exports = mqttproductModel;
>>>>>>> 7ccd62b3acd5fea7af4cbabf464d1adf2271a22c
