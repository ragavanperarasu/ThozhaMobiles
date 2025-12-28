const mongoose = require("mongoose");
const { Schema } = mongoose;

module.exports = (dbConnection) => {
  const assetSchema = new Schema(
    {
      puid: {
        type: Schema.Types.ObjectId,
        required: true
      },
      vuid: {
        type: Schema.Types.ObjectId,
        required: true
      },
      url: [
        {
          type: String,
          required: true
        }
      ]
    },
    { timestamps: true }
  );

  // ✅ ONLY use dbConnection passed from server.js
  return dbConnection.model("Asset", assetSchema);
};
