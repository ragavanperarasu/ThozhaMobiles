const mongoose = require("mongoose");
const { Schema } = mongoose;

// ================= SELLER SCHEMA =================
const sellerSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: Number, required: true },
  businessName: { type: String, required: true },
  gstNumber: { type: String },
  address: { type: String },
  isActive: { type: Boolean, default: true },
}, { timestamps: true });

// ================= ASSET SCHEMA =================
const assetSchema = new Schema({
  productId: { type: Schema.Types.ObjectId, ref: "Product", required: true },
  variantId: { type: Schema.Types.ObjectId, ref: "Variant" },
  url: { type: String, required: true },
  type: { type: String, enum: ["image", "video"], default: "image" },
}, { timestamps: true });

// ================= VARIANT SCHEMA =================
const variantSchema = new Schema({
  productId: { type: Schema.Types.ObjectId, ref: "Product", required: true },
  attribute: { type: String, required: true },
  value: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, default: 0 },
  assetIds: [{ type: Schema.Types.ObjectId, ref: "Asset" }],
  inStock: { type: Boolean, default: true },
}, { timestamps: true });

// ================= REVIEW SCHEMA =================
const reviewSchema = new Schema({
  productId: { type: Schema.Types.ObjectId, ref: "Product", required: true },
  customerId: { type: Schema.Types.ObjectId, ref: "Customer", required: true },
  rating: { type: Number, required: true, min: 0, max: 5 },
  review: { type: String },
  images: [{ type: Schema.Types.ObjectId, ref: "Asset" }],
}, { timestamps: true });

// ================= PRODUCT SCHEMA =================
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

// ================= CUSTOMER SCHEMA =================
const customerSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone1: { type: Number, required: true },
  phone2: { type: Number },
  shipmentAddress: { type: String },
  billingAddress: { type: String },
  orders: [{ type: Schema.Types.ObjectId, ref: "Orders" }],
  customerId: { type: Number, unique: true },
  dateOfBirth: { type: Date },
  gender: { type: String },
  profileImage: { type: String },
}, { timestamps: true });

// ================= CART SCHEMA =================
const cartSchema = new Schema({
  customerId: { type: Schema.Types.ObjectId, ref: "Customer", required: true },
  items: [{ type: Schema.Types.ObjectId, ref: "Product" }],
  totalQuantity: { type: Number, default: 0 },
  totalPrice: { type: Number, default: 0 },
}, { timestamps: true });

// ================= ORDERS SCHEMA =================
const productItemSchema = new Schema({
  productId: { type: Schema.Types.ObjectId, ref: "Product", required: true },
  variantId: { type: Schema.Types.ObjectId, ref: "Variant" },
  quantity: { type: Number, default: 1 },
  price: { type: Number, required: true },
});

const ordersSchema = new Schema({
  orderNumber: { type: String, unique: true, required: true },
  customerId: { type: Schema.Types.ObjectId, ref: "Customer", required: true },
  productItems: [productItemSchema],
  totalAmount: { type: Number, required: true },
  discountAmount: { type: Number, default: 0 },
  paymentMethod: { type: String },
  paymentStatus: { type: String },
  orderStatus: { type: String },
  shippingAddress: { type: String },
  billingAddress: { type: String },
  orderedAt: { type: Date, default: Date.now },
  deliveredAt: { type: Date },
}, { timestamps: true });

// ================= EXPORT MODELS =================
module.exports = {
  Seller: mongoose.model("Seller", sellerSchema),
  Product: mongoose.model("Product", productSchema),
  Variant: mongoose.model("Variant", variantSchema),
  Asset: mongoose.model("Asset", assetSchema),
  Review: mongoose.model("Review", reviewSchema),
  Customer: mongoose.model("Customer", customerSchema),
  Cart: mongoose.model("Cart", cartSchema),
  Orders: mongoose.model("Orders", ordersSchema),
};
