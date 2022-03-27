const express = require("express");
const router = express.Router();

// LOGOUT
router.get("/", (req, res) => {
  res.clearCookie("jwt");
  return res.status(200).redirect("/");
});

module.exports = router;
