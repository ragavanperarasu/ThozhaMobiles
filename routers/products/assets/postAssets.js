const express = require("express");
const router = express.Router();

module.exports = (Asset) => {
  // ADD ASSET
  router.post("/add", async (req, res) => {
    try {
      const { puid, vuid, url } = req.body;

      if (!puid || !vuid || !url || !Array.isArray(url) || url.length === 0) {
        return res.status(400).json({ error: "Required fields missing" });
      }

      const asset = new Asset({ puid, vuid, url });
      await asset.save();
      res.json({ message: "Asset created successfully", asset });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  return router;
};

