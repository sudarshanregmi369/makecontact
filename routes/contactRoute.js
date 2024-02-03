const express = require("express");
const router = express.Router();
router.route("/").get((request, response)=>{
    response.send("get api request")
});

router.route("/").post((request, response)=>{
    response.send("get api request")
});
router.route("/:id").put((request, response)=>{
    response.send(`Message updates ${request.params.id}`)
});

router.route("/:id").delete((request, response)=>{
    response.send(`Message updates ${request.params.id}`)
});

module.exports = router;