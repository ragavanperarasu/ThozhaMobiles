const express = require("express");

module.exports = (Variant) => {
  const router = express.Router();

  // GET all variants
  router.get("/", async (req, res) => {
    try {
      const variants = await Variant.find();
      res.status(200).json({
        status: "success",
        count: variants.length,
        data: variants
      });
    } catch (err) {
      res.status(500).json({ status: "error", message: err.message });
    }
  });

  // GET variant by ID
  router.get("/:id", async (req, res) => {
    try {
      const variant = await Variant.findById(req.params.id);
      if (!variant) {
        return res.status(404).json({
          status: "failed",
          message: "Variant not found"
        });
      }
      res.json({ status: "success", data: variant });
    } catch (err) {
      res.status(500).json({ status: "error", message: err.message });
    }
  });

  return router;
};
