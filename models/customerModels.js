const mongoose = require ("mongoose");
const userConnection = require ("../db/userDB");


const customerSchema = new Schema({
  name: String, 
  email: String,
  phone1:  Number,
  phone2: Number,
  shipmentAddress: String,
  billingAddress: String,
  orders: [{ type: Schema.Types.ObjectId, ref: "Orders" }],
  customerId: { type: Number, unique: true },
  dateOfBirth: Date,
  gender: String,
  profileImage: String,
}, { timestamps: true });


const customerModels=customerConnection.model("customer",customerModels);

module.exports=customerModels;