const mongoose = require("mongoose");
const { Schema } = mongoose;

module.exports = (userConnection) => {
  // Define schema
  const customerSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phno: Number,
    phnt: Number,
    sipadd: String,
    billAdd: String,
    ord: { type: Schema.Types.ObjectId, ref: "Order" },
    dob: Date,
    sex: String
  }, { timestamps: true });

  // Create model using the connected DB
  return userConnection.model("Customer", customerSchema);
};
