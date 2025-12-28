const express = require("express");

module.exports = (User) => {
  const router = express.Router();

  // 🔹 Get all users
  router.get("/", async (req, res) => {
    try {
      const users = await User.find();

      res.status(200).json({
        status: "success",
        count: users.length,
        data: users
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message
      });
    }
  });

  // 🔹 Get single user by ID
  router.get("/:id", async (req, res) => {
    try {
      const user = await User.findById(req.params.id);

      if (!user) {
        return res.status(404).json({
          status: "failed",
          message: "User not found"
        });
      }

      res.status(200).json({
        status: "success",
        data: user
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: "Invalid user ID"
      });
    }
  });

  return router;
};
