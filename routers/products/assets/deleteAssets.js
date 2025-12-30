const express = require("express");
const router = express.Router();

module.exports = (Asset) => {
  // DELETE ASSET
  router.delete("/delete/:id", async (req, res) => {
    try {
      const { assetId } = req.body;

      if (!assetId) {
        return res.status(400).json({ error: "assetId required" });
      }

      const asset = await Asset.findById(assetId);

      if (!asset) {
        return res.status(404).json({ error: "Asset not found" });
      }

      await Asset.findByIdAndDelete(assetId);

      res.json({
        message: "Asset deleted successfully"
      });

    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  return router;
};