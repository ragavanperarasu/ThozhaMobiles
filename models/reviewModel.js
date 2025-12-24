const mongoose = require("mongoose");
const productConnection = require("../db/productDB");
const reviewSchema = new Schema(
  {
    puid:mongoose.Schema.Types.ObjectId,
    cuid:mongoose.Schema.Types.ObjectId,
    rat: Number,
    rev: String,
    imgs: [{ type: String }],
  },
  { timestamps: true }
);

const reviewModel = productConnection.model("reviews", reviewSchema);

module.exports = reviewModel;
