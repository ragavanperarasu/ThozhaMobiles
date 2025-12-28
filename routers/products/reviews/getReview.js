const express = require("express");

module.exports = (Review) => {
  const router = express.Router();

  // GET all reviews (optionally by product id)
  router.get("/", async (req, res) => {
    try {
      const { puid } = req.query; // product id (optional)

      const filter = {};
      if (puid) {
        filter.puid = puid;
      }

      const reviews = await Review.find(filter).sort({ createdAt: -1 });

      res.status(200).json({
        status: "success",
        count: reviews.length,
        data: reviews
      });

    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message
      });
    }
  });

  // GET review by ID
  router.get("/:id", async (req, res) => {
    try {
      const review = await Review.findById(req.params.id);

      if (!review) {
        return res.status(404).json({
          status: "failed",
          message: "Review not found"
        });
      }

      res.status(200).json({
        status: "success",
        data: review
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
