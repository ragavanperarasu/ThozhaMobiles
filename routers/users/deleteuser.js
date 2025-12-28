const express = require("express");

module.exports = (User) => {
  const router = express.Router();

  // Delete customer by ID
  router.delete("/:id", async (req, res) => {
    try {
      const { id } = req.params;

      // Check if ID is provided
      if (!id) {
        return res.status(400).json({ status: "failed", message: "Customer ID is required" });
      }

      // Find and delete customer
      const deletedCustomer = await User.findByIdAndDelete(id);

      if (!deletedCustomer) {
        return res.status(404).json({ status: "failed", message: "Customer not found" });
      }

      res.status(200).json({
        status: "success",
        message: "Customer deleted successfully",
        data: deletedCustomer
      });

    } catch (err) {
      res.status(500).json({ status: "error", message: err.message });
    }
  });

  return router;
};
