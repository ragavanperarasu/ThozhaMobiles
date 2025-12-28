const express = require("express");
const router = express.Router();

module.exports = (Cart) => {

  router.put("/update", async (req, res) => {
    try {
      const { customerId, productId, quantity } = req.body;

      if (!customerId || !productId || quantity == null) {
        return res.status(400).json({ error: "customerId, productId, quantity required" });
      }

      const cart = await Cart.findOne({ customerId });
      if (!cart) {
        return res.status(404).json({ error: "Cart not found" });
      }

      const index = cart.items.findIndex(
        i => i.productId.toString() === productId
      );

      if (index === -1) {
        return res.status(404).json({ error: "Product not in cart" });
      }

      cart.items[index].quantity = quantity;

      if (quantity <= 0) {
        cart.items.splice(index, 1);
      }

      cart.totqua = cart.items.reduce((s, i) => s + i.quantity, 0);
      cart.totpri = cart.items.reduce((s, i) => s + i.quantity * i.price, 0);

      await cart.save();
      res.json({ message: "Cart updated", cart });

    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  return router;
};
