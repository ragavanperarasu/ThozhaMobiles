const express = require("express");
const router = express.Router();

module.exports = (Cart) => {
  // GET CART
  router.get("/get", async (req, res) => {
    try {
      const { customerId } = req.query;

      if (!customerId) {
        return res.status(400).json({ error: "customerId required" });
      }

      const cart = await Cart.findOne({ customerId });

      if (!cart) {
        return res.status(404).json({ message: "Cart is empty" });
      }

      res.json({ cart });

    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  return router;
};
