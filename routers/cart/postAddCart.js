const express = require("express");
const router = express.Router();

module.exports = (Cart) => {
  // ADD TO CART
  router.post("/add", async (req, res) => {
    try {
      const { customerId, productId, quantity, price } = req.body;

      let cart = await Cart.findOne({ customerId });

      if (!cart) {
        cart = new Cart({
          customerId,
          items: [{ productId, quantity, price }],
          totqua: quantity,
          totpri: quantity * price
        });
      } else {
        const index = cart.items.findIndex(
          i => i.productId.toString() === productId
        );

        if (index > -1) {
          cart.items[index].quantity += quantity;
        } else {
          cart.items.push({ productId, quantity, price });
        }

        cart.totqua = cart.items.reduce((s, i) => s + i.quantity, 0);
        cart.totpri = cart.items.reduce(
          (s, i) => s + i.quantity * i.price,
          0
        );
      }

      await cart.save();
      res.json({ message: "Item added to cart", cart });

    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  return router;
};
