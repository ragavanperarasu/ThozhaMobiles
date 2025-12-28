import customerModels from "./customerModels";

const mongoose=require ("mongoose");
const userConnection=("../db/userDB");
<<<<<<< HEAD:models/ordersModels
const{v4:uuid}=require("uuidv4");
=======

>>>>>>> c20e5b704f847543c8384471ff653b4225f74f34:models/oredersModels.js

const ordersSchema = new Schema({
  ordNum:String, 
  custId:Schema.Types.ObjectId,
  proditms: [productItemSchema],
  totamt: Number,
  disAmt: Number,
  paymMet: String ,
  paymStat: String,
  ordStat: String,
  shipAdd: String,
  billAdd: String,
  ordAt: { type: Date, default: Date.now },
  delivAt: { type: Date },
}, { timestamps: true });

const orderModels=customerConnetion.model("orders",customerModels);
module.exports=orderModels;