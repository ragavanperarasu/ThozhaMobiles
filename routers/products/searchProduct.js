const express = require("express");
const mongoose = require("mongoose");

module.exports = (Product) => {
  const router = express.Router();

  // GET /products/search?key=iphone
  router.get("/search", async (req, res) => {
    try {
      const { key } = req.query;

      if (!key) {
        return res.status(400).json({
          status: "failed",
          message: "Search key is required"
        });
      }

      let query = [];

      // 🔎 Search by product name (case-insensitive)
      query.push({
        productName: { $regex: key, $options: "i" }
      });

      // 🔎 Search by productId if valid ObjectId
      if (mongoose.Types.ObjectId.isValid(key)) {
        query.push({ _id: key });
      }

      const products = await Product.find({
        $or: query
      });

      res.status(200).json({
        status: "success",
        count: products.length,
        data: products
      });

    } catch (err) {
      res.status(500).json({
        status: "error",
        message: err.message
      });
    }
  });

  return router;
};
