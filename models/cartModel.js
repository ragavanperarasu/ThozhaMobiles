const mongoose = require("mongoose");
const { Schema } = mongoose;

module.exports = (userConnection) => {
  // Define cart schema
  const cartSchema = new Schema(
    {
      customerId: {
        type: Schema.Types.ObjectId,
        ref: "Customer",
        required: true
      },
      items: [
        {
          productId: {
            type: Schema.Types.ObjectId
          },
          quantity: {
            type: Number,
            required: true
          },
          price: {
            type: Number,
            required: true
          }
        }
      ],
      totqua: {
        type: Number,
        default: 0
      },
      totpri: {
        type: Number,
        default: 0
      }
    },
    { timestamps: true }
  );

  // Create model using the connected DB
  return userConnection.model("Cart", cartSchema);
};
