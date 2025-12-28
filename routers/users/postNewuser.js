const express = require("express");

module.exports = (User) => {
  const router = express.Router();

  // Create new user
  router.post("/new", async (req, res) => {
    try {
      const { name, email, password, phno, phnt, sipadd, billAdd, dob, sex } = req.body;

      // Check required fields
      if (!name || !email || !password) {
        return res.status(400).json({
          status: "failed",
          message: "Name, email, and password are required"
        });
      }

      // Create user (password saved as plain text)
      const user = await User.create({
        name,
        email,
        password,
        phno,
        phnt,
        sipadd,
        billAdd,
        dob,
        sex
      });

      res.status(201).json({
        status: "success",
        message: "User created successfully",
        data: user
      });
    } catch (err) {
      // Handle duplicate email or other errors
      if (err.code === 11000) {
        return res.status(400).json({ status: "failed", message: "Email already exists" });
      }
      res.status(500).json({ status: "error", message: err.message });
    }
  });

  return router;
};
