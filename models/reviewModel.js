const mongoose = require("mongoose");
const { Schema } = mongoose;

module.exports = (productConnection) => {
  const reviewSchema = new Schema(
    {
      puid: { type: Schema.Types.ObjectId, required: true },
      cuid: { type: Schema.Types.ObjectId, required: true },
      rat: { type: Number, required: true, min: 1, max: 5 },
      rev: { type: String },
      imgs: [{ type: String }]
    },
    { timestamps: true }
  );

  return productConnection.model("reviews", reviewSchema);
};
