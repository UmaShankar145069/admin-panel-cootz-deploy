const express = require("express");
const router = express.Router();
const Referal = require("../model/referal");

router.get("/", async (req, res) => {
  try {
    const referal = await Referal.findOne(req.user.referalId);
    res.status(201).send({
      referalsDone: referal.referalsDone,
      referalSuccess: referal.referalSuccess,
      referalPaid: referal.referalPaid,
      referalHistory: referal.referalHistory,
      referalId: req.user.referalId,
    });
  } catch (error) {
    res.status(404).send(error);
  }
});

module.exports = router;
