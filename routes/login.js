const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../model/user");

// // login page
// router.get("/", (req, res) => {
//   res.render("login");
// });

// verify user login and set cookies

router.post("/", async (req, res) => {
  try {
    let email = req.body.email;
    console.log("hi");
    let password = req.body.password;
    const user = await User.findOne({ email: email });
    const isMatch = await bcrypt.compare(password, user.password);
    const token = await user.jwt.genAuthToken();
    req.user = user;
    //  console.log(token);
    res.cookie("jwt", token, {
      expires: Date(Date.now() + 100000000),
      httpOnly: true,
      // secure: true
    });

    if (isMatch) {
      res.status(201).render("referal");
    } else {
      res.status(400).send("Invalid Credentials");
    }
  } catch (error) {
    res.status(400).send(" Credentials Invalid");
  }
});

module.exports = router;
