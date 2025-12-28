const express = require("express");

module.exports = (Order) => {
  const router = express.Router();

  // GET all orders
  router.get("/", async (req, res) => {
    try {
      const orders = await Order.find().sort({ createdAt: -1 });

      res.status(200).json({
        status: "success",
        count: orders.length,
        data: orders
      });
    } catch (err) {
      res.status(500).json({
        status: "error",
        message: err.message
      });
    }
  });

  return router;
};
