const mongoose = require("mongoose");
const userConnection = require("../db/userDB");

const customerSchema = new Schema({

    name: String,
    email: String,
    phno: Number,
    phnt: Number,
    sipadd: String,
    billAdd: String,
    ord:Schema.Types.ObjectId,
    dob: Date,
    sex: String,
    profimg: String,
}, { timestamps: true });


const customerModels = customerConnection.model("customers", customerModels);

module.exports = customerModels;
