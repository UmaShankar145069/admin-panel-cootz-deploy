const express = require("express");
const router = express.Router();

router.get("/", (req, res)=>{
    // const email= req.user.email;
    //  console.log(req.user);
    res.status(201).send({
       wallet : req.user.wallet,
       photo: req.user.photo, 
       email:  req.user.email,
       name: req.user.name,
       phone: req.user.phone,
       referalId: req.user.referalId
     });
});

module.exports = router;