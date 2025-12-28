require("dotenv").config();
const mongoose = require("mongoose");


const connectUserDB = async () => {
  try {
    const conn = await mongoose.createConnection(process.env.DB_CONNECTION);
    console.log("✅ User DB connected");
    return conn;
  } catch (error) {
    console.error("❌ User DB connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectUserDB;
