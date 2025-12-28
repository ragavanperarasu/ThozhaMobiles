const mongoose = require("mongoose");
const userConnection = require("../db/userDB");

const cartSchema = new Schema({
    customerId:Schema.Types.ObjectId,
    items:Schema.Types.ObjectId,
    totqua: Number,
    totpri: Number,
}, { timestamps: true });
const cartModels = customerConection.model("carts", cartSchema);
module.export = cartModels;