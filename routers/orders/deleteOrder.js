const express = require("express");

module.exports = (Order) => {
  const router = express.Router();

  // DELETE order by ID
  router.delete("/delete/:id", async (req, res) => {
    try {
      const order = await Order.findByIdAndDelete(req.params.id);

      if (!order) {
        return res.status(404).json({
          status: "failed",
          message: "Order not found"
        });
      }

      res.status(200).json({
        status: "success",
        message: "Order deleted successfully",
        data: order
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
