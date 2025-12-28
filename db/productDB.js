require("dotenv").config();
const mongoose = require("mongoose");


const connectProductDB = async () => {
 try {
    const conn = await mongoose.createConnection(process.env.DB_CONNECTION);
    console.log("✅ Product DB connected");
    return conn;
  } catch (error) {
    console.error("❌ Product DB connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectProductDB;
