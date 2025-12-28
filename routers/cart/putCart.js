const express = require("express");
const router = express.Router();

module.exports = (Cart) => {
  // UPDATE CART (change quantity)
  router.put("/update", async (req, res) => {
    try {
      const { customerId, productId, quantity } = req.body;

      if (!customerId || !productId || quantity == null) {
        return res.status(400).json({
          error: "customerId, productId and quantity required"
        });
      }

      const cart = await Cart.findOne({ customerId });

      if (!cart) {
        return res.status(404).json({ error: "Cart not found" });
      }

      const index = cart.items.findIndex(
        i => i.productId.toString() === productId
      );

      if (index === -1) {
        return res.status(404).json({ error: "Product not found in cart" });
      }

      // Update quantity
      if (quantity <= 0) {
        cart.items.splice(index, 1);
      } else {
        cart.items[index].quantity = quantity;
      }

      // Recalculate totals
      cart.totqua = cart.items.reduce((s, i) => s + i.quantity, 0);
      cart.totpri = cart.items.reduce(
        (s, i) => s + i.quantity * i.price,
        0
      );

      await cart.save();

      res.json({
        message: "Cart updated successfully",
        cart
      });

    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  return router;
};
