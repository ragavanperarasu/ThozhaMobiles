const express = require("express");

module.exports = (Variant) => {
  const router = express.Router();

  // Create new variant
  router.post("/new", async (req, res) => {
    try {
      const { puid, atr, price, stock, auid } = req.body;

      if (!puid || !price) {
        return res.status(400).json({
          status: "failed",
          message: "Product ID and price are required"
        });
      }

      const variant = await Variant.create({
        puid,
        atr,
        price,
        stock,
        auid
      });

      res.status(201).json({
        status: "success",
        message: "Variant created successfully",
        data: variant
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
