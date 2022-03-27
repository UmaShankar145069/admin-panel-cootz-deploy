// const { Schema, model, mongoose } = require("mongoose");
const mongoose = require("mongoose");
const Contest = require("./contest");

const contestSchema = mongoose.Schema({
  contestId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Contest",
  },
  maxLimit: {
    type: Number,
    required: true,
  },

  current: {
    type: Number,
    required: true,
  },

  shareLink: {
    type: String,
    unique: true,
  },
});
module.exports = mongoose.model("History", contestSchema);
