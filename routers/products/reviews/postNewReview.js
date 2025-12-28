const express = require("express");

module.exports = (Review) => {
  const router = express.Router();

  // CREATE REVIEW
  router.post("/new", async (req, res) => {
    try {
      const { puid, cuid, rat, rev, imgs } = req.body;

      // Required validation
      if (!puid || !cuid || !rat) {
        return res.status(400).json({
          status: "failed",
          message: "puid, cuid and rating are required"
        });
      }

      const review = await Review.create({
        puid,
        cuid,
        rat,
        rev,
        imgs
      });

      res.status(201).json({
        status: "success",
        message: "Review added successfully",
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
