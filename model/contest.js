// const { Schema, model, mongoose } = require("mongoose");
const mongoose = require("mongoose");
const { schema } = require("./referal");

const contestSchema = mongoose.Schema({
  contest: {
    type: String,
    unique: true,
  },
});
module.exports = mongoose.model("Contest", contestSchema);
