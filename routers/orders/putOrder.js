const express = require("express");

module.exports = (Order) => {
  const router = express.Router();

  // UPDATE order by ID
  router.put("/update/:id", async (req, res) => {
    try {
      const updatedOrder = await Order.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,       // return updated document
          runValidators: true
        }
      );

      if (!updatedOrder) {
        return res.status(404).json({
          status: "failed",
          message: "Order not found"
        });
      }

      res.status(200).json({
        status: "success",
        message: "Order updated successfully",
        data: updatedOrder
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
