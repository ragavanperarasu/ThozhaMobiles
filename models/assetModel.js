const mongoose = require("mongoose");
const productConnection = require("../db/productDB");
const { v4: uuidv4 } = require("uuid");
const assetSchema = new Schema(
  {
    auid: { type: String, index: true, default: uuidv4 },
    puid: String,
    vuid: String,
    url: [{ type: String }],
  },
  { timestamps: true }
);
const assetModel = productConnection.model("assets", assetSchema);
module.exports = assetModel;
