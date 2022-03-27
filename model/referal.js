const mongoose = require("mongoose");

const referalSchema = mongoose.Schema(
  {
    // referalId: {
    //     type: moongose.Schema.Types.ObjectId,
    //     ref: "user"
    // },
    refererId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    referalsDone: {
      type: Number,
      default: 0,
    },
    referalSuccess: {
      type: Number,
      default: 0,
    },
    referalPaid: {
      type: Number,
      default: 0,
    },
    // referalLink: String,
    referalHistory: [
      {
        SerialNo: Number,
        userName: {
          type: String,
          required: true,
        },
        referalLavel: {
          type: Number,
          default: 1,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const referal = mongoose.model("Referal", referalSchema);
module.exports = referal;
