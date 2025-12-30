const express = require("express");
const router = express.Router();

module.exports = (Asset) => {
  // GET ASSETS BY OWNER
  router.get("/get", async (req, res) => {
    try {
      const { ownerId } = req.query;

      if (!ownerId) {
        return res.status(400).json({ error: "ownerId required" });
      }

      const assets = await Asset.find({ ownerId });

      if (!assets || assets.length === 0) {
        return res.json({ message: "No assets found" });
      }

      res.json({ assets });

    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  return router;
};
