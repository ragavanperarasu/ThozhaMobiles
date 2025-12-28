const express = require("express");

module.exports = (User) => {
  const router = express.Router();

  // Update customer by ID
  router.put("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const updateData = req.body; // Fields to update

      if (!id) {
        return res.status(400).json({ status: "failed", message: "Customer ID is required" });
      }

      // Find and update customer
      const updatedCustomer = await User.findByIdAndUpdate(
        id,
        { $set: updateData },
        { new: true, runValidators: true } // return the updated document
      );

      if (!updatedCustomer) {
        return res.status(404).json({ status: "failed", message: "Customer not found" });
      }

      res.status(200).json({
        status: "success",
        message: "Customer updated successfully",
        data: updatedCustomer
      });
    } catch (err) {
      res.status(500).json({ status: "error", message: err.message });
    }
  });

  return router;
};
