const express = require("express");
const router = express.Router();

module.exports = (Asset) => {

  // UPDATE ASSET
  router.put("/update", async (req, res) => {
    try {
      const { assetId, puid, vuid, url } = req.body;

      if (!assetId) {
        return res.status(400).json({ error: "assetId required" });
      }

      const asset = await Asset.findById(assetId);

      if (!asset) {
        return res.status(404).json({ error: "Asset not found" });
      }

      if (puid) asset.puid = puid;
      if (vuid) asset.vuid = vuid;
      if (url) asset.url = url;

      await asset.save();

      res.json({
        message: "Asset updated successfully",
        asset
      });

    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  return router;
};
