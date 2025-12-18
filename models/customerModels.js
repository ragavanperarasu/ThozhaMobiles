const mongoose = require ("mongoose");
const userConnection = require ("../db/userDB");


const customerSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone1: { type: Number, required: true },
  phone2: { type: Number },
  shipmentAddress: { type: String },
  billingAddress: { type: String },
  orders: [{ type: Schema.Types.ObjectId, ref: "Orders" }],
  customerId: { type: Number, unique: true },
  dateOfBirth: { type: Date },
  gender: { type: String },
  profileImage: { type: String },
}, { timestamps: true });


const customerModels=customerConnection.model("customer",customerModels);

module.exports=customerModels;