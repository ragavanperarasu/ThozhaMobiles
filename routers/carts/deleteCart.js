const express = require("express");
const router = express.Router();

module.exports = (Cart) => {
  // DELETE PRODUCT FROM CART
  router.delete("/delete/:productId", async (req, res) => {
    try {
      const { customerId } = req.body;
      const { productId } = req.params;

      if (!customerId || !productId) {
        return res.status(400).json({ error: "customerId and productId required" });
      }

      const cart = await Cart.findOne({ customerId });
      if (!cart) {
        return res.status(404).json({ error: "Cart not found" });
      }

      // Remove item
      cart.items = cart.items.filter(i => i.productId.toString() !== productId);

      // Recalculate totals
      cart.totqua = cart.items.reduce((sum, i) => sum + i.quantity, 0);
      cart.totpri = cart.items.reduce((sum, i) => sum + i.quantity * i.price, 0);

      await cart.save();
      res.json({ message: "Product removed from cart", cart });

    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  return router;
};
