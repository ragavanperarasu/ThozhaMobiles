require('dotenv').config();
const mongoose = require('mongoose');

const productConnection = mongoose.createConnection(process.env.MONGODB_PRODUCT_URI);

productConnection.on('connected', () => {
  console.log('✅ MongoDB product DB connected successfully');
});

productConnection.on('error', (err) => {
  console.error('❌ MongoDB product DB connection error:', err);
});

productConnection.on('disconnected', () => {
  console.log('⚠️ MongoDB product DB disconnected');
});

module.exports = productConnection;
