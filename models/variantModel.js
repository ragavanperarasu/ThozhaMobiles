const mongoose = require("mongoose");
const { Schema } = mongoose;

module.exports = (productConnection) => {
  const variantSchema = new Schema(
    {
      puid: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
      },
      atr: [
        {
          key: String,
          value: String
        }
      ],
      price: {
        type: Number,
        required: true
      },
      stock: {
        type: Number,
        default: 0
      },
      auid: {
        type: mongoose.Schema.Types.ObjectId
      }
    },
    { timestamps: true }
  );

  return productConnection.model("variants", variantSchema);
};
