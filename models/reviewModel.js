const mongoose = require("mongoose");
const productConnection = require("../db/productDB");
const { v4: uuidv4 } = require("uuid");
const reviewSchema = new Schema(
  {
    ruid: { type: String, index: true, default: uuidv4 },
    puid: String,
    cuid: String,
    rating: Number,
    review: String,
    imgs: [{ type: String }],
  },
  { timestamps: true }
);

const reviewModel = productConnection.model("reviews", reviewSchema);

module.exports = reviewModel;
