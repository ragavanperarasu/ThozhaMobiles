const express = require("express");

module.exports = (Order) => {
  const router = express.Router();

  // GET orders by customer
  router.get("/customer/:custId", async (req, res) => {
    try {
      const orders = await Order.find({
        custId: req.params.custId
      });

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
