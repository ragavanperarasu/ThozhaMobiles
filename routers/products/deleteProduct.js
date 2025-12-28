const express = require("express");
const fs = require("fs").promises;
const path = require("path");

module.exports = (Product) => {
  const router = express.Router();

  router.delete("/delete/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Product.findById(id);
      if (!product) return res.status(404).json({ status: "failed", message: "Product not found" });

      if (product.mimg) {
        const imagePath = path.join(__dirname, "../../", product.mimg);
        fs.unlink(imagePath).catch(err => console.error("Image delete error:", err));
      }

      await Product.findByIdAndDelete(id);

      res.json({ status: "success", message: "Product deleted successfully" });
    } catch (err) {
      res.status(500).json({ status: "error", message: err.message });
    }
  });

  return router;
};
