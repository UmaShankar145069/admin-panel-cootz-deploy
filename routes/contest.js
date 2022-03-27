const express = require("express");
const router = express.Router();
const History = require("../model/history");
const Contest = require("../model/contest");

router.post("/", async (req, res) => {
  const contest = req.body.contest;
  if (!contest) {
    res.status(404).send("Please enter contest id");
  } else {
    await Contest.save();
  }
});
router.get("/", async (req, res) => {
  const data = await History.find();
  res.status(200).send(data);
});
module.exports = router;
