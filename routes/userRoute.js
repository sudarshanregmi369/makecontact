const express = require("express");
const router = express.Router()

router.post("/register",(request,response)=>{
    response.json({message:"register the user"})
});

router.post("/login", (request,response)=>{
    response.json({message:  "login user"})
});
router.get("/current", (request,response)=>{
    response.json({message:"current user"})
});
module.exports = router;
