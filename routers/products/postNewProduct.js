const express = require("express");
const multer = require("multer");
const path = require("path");

module.exports = (Product) => {
  const router = express.Router();

  const storage = multer.diskStorage({
    destination: "uploads/",
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname));
    }
  });

  const upload = multer({ storage });

  router.post("/new", upload.single("mimg"), async (req, res) => {
    try {
      const product = await Product.create({
        ...req.body,
        tags: JSON.parse(req.body.tags),
        keys: JSON.parse(req.body.keys),
        mimg: `/uploads/${req.file.filename}`
      });

      res.status(201).json({
        status: "success",
        data: product
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
