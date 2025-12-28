const express = require("express");

module.exports = (Review) => {
  const router = express.Router();

  // UPDATE review by ID
  router.put("/update/:id", async (req, res) => {
    try {
      const { id } = req.params;

      // Allow only these fields to be updated
      const allowedFields = ["rat", "rev", "imgs"];
      const updateData = {};

      allowedFields.forEach((field) => {
        if (req.body[field] !== undefined) {
          updateData[field] = req.body[field];
        }
      });

      const updatedReview = await Review.findByIdAndUpdate(
        id,
        updateData,
        { new: true, runValidators: true }
      );

      if (!updatedReview) {
        return res.status(404).json({
          status: "failed",
          message: "Review not found"
        });
      }

      res.status(200).json({
        status: "success",
        message: "Review updated successfully",
        data: updatedReview
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
