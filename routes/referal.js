const express = require("express");
const router = express.Router();

// Sign Up First and then call this get method

router.get("/:referalId", async (req, res) => {
    try {
        const referalId=req.params.referalId;
        if(referalId){
            const user= await User.findOne({referalId:referalId});
            
        }
        

    } catch (error) {
        res.status(404).send(error);
    }
});

module.exports = router;