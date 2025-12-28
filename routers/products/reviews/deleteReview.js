const express = require("express");

module.exports = (Review) => {
  const router = express.Router();

  // DELETE review by ID
  router.delete("/delete/:id", async (req, res) => {
    try {
      const { id } = req.params;

      const deletedReview = await Review.findByIdAndDelete(id);

      if (!deletedReview) {
        return res.status(404).json({
          status: "failed",
          message: "Review not found"
        });
      }

      res.status(200).json({
        status: "success",
        message: "Review deleted successfully",
        data: deletedReview
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
