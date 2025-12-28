const mongoose = require("mongoose");
const { Schema } = mongoose;

module.exports = (userConnection) => {
  const productItemSchema = new Schema(
    {
      productId: { type: Schema.Types.ObjectId, required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true }
    },
    { _id: false } // embedded schema doesn't need its own _id
  );

  const orderSchema = new Schema(
    {
      ordNum: String,
      custId: { type: Schema.Types.ObjectId, ref: "Customer", required: true },
      proditms: [productItemSchema],
      totamt: Number,
      disAmt: Number,
      paymMet: String,
      paymStat: String,
      ordStat: String,
      shipAdd: String,
      billAdd: String,
      ordAt: { type: Date, default: Date.now },
      delivAt: Date
    },
    { timestamps: true }
  );

  return userConnection.model("Order", orderSchema);
};
