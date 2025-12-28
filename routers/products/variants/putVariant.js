const express = require("express");

module.exports = (Variant) => {
  const router = express.Router();

  // UPDATE variant by ID
  router.put("/update/:id", async (req, res) => {
    try {
      const { id } = req.params;

      const updatedVariant = await Variant.findByIdAndUpdate(
        id,
        req.body,
        { new: true, runValidators: true }
      );

      if (!updatedVariant) {
        return res.status(404).json({
          status: "failed",
          message: "Variant not found"
        });
      }

      res.status(200).json({
        status: "success",
        message: "Variant updated successfully",
        data: updatedVariant
      });

    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message
      });
    }
  });

  return router;
};
