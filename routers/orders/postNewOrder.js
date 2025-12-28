const express = require("express");

module.exports = (Order) => {
  const router = express.Router();

  router.post("/new", async (req, res) => {
    try {
      const orderData = req.body;

      const order = await Order.create(orderData);

      res.status(201).json({
        status: "success",
        message: "Order created successfully",
        data: order
      });
    } catch (err) {
      res.status(500).json({ status: "error", message: err.message });
    }
  });

  return router;
};
