/**
 * Everything that is related to the '/user' route,
 * goes in here.
 */

const express = require("express")
var router = express.Router();

router.get("/:username", (req, res) => {
    var username = req.params.username

    res.send("STILL TODO")
})

router.get("/:username/packages", (req, res) => {
    var username = req.params.username
    res.send("STILL TODO")
})

module.exports = router