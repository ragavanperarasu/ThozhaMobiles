const express = require('express');
const router = express.Router();

// A simple test route
router.get('/test', (req, res) => {
    console.log("Test route accessed");
  res.json({ message: 'Test route is working!' });
});

module.exports = router;