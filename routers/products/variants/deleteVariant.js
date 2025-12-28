const express = require("express");

module.exports = (Variant) => {
  const router = express.Router();

  // DELETE variant by ID
  router.delete("/delete/:id", async (req, res) => {
    try {
      const { id } = req.params;

      const deletedVariant = await Variant.findByIdAndDelete(id);

      if (!deletedVariant) {
        return res.status(404).json({
          status: "failed",
          message: "Variant not found"
        });
      }

      res.status(200).json({
        status: "success",
        message: "Variant deleted successfully",
        data: deletedVariant
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
