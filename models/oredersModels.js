import customerModels from "./customerModels";

const mongoose=require ("mongoose");
const userConnection=("../db/userDB");


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