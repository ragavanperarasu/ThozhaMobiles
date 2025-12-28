const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs").promises;

module.exports = (Product) => {
  const router = express.Router();

  // Multer setup
  const storage = multer.diskStorage({
    destination: "uploads/",
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname));
    }
  });

  const upload = multer({ storage });

  // Update product route
  router.put("/update/:id", upload.single("mimg"), async (req, res) => {
    try {
      const { id } = req.params;
      const existingProduct = await Product.findById(id);

      if (!existingProduct) {
        return res.status(404).json({ status: "failed", message: "Product not found" });
      }

      // If a new image is uploaded, delete the old one
      if (req.file && existingProduct.mimg) {
        const oldImagePath = path.join(__dirname, "../../", existingProduct.mimg);
        fs.unlink(oldImagePath).catch(err => console.error("Old image delete error:", err));
      }

      // Prepare updated data
      const updatedData = {
        ...req.body,
        tags: req.body.tags ? JSON.parse(req.body.tags) : existingProduct.tags,
        keys: req.body.keys ? JSON.parse(req.body.keys) : existingProduct.keys,
      };

      if (req.file) {
        updatedData.mimg = `/uploads/${req.file.filename}`;
      }

      // Update in DB
      const updatedProduct = await Product.findByIdAndUpdate(id, updatedData, { new: true });

      res.json({
        status: "success",
        message: "Product updated successfully",
        data: updatedProduct
      });

    } catch (err) {
      res.status(500).json({ status: "error", message: err.message });
    }
  });

  return router;
};
