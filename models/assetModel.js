const { v4: uuidv4 } = require("uuid");
const assetSchema = new Schema(
  {
    puid:mongoose.Schema.Types.ObjectId,
    vuid:mongoose.Schema.Types.ObjectId,
    url: [{ type: String }],
  },
  { timestamps: true }
);
const assetModel = productConnection.model("assets", assetSchema);
module.exports = assetModel;
