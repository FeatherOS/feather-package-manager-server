/**
 * Everything that is related to the '/package' route,
 * goes in here.
 */


const express = require("express")
var router = express.Router();

router.get("/:pid", (req, res) => {
    /** TODO:
    *   - check if Package exists
    *      - if package version doesn't exists, rediretct do latest version
    */

    res.render("package", {
        "PACKAGE_NAME": req.params.pid,
        "PACKAGE_VERSION": {
            "MAJOR": 0,
            "MINRO": 0,
            "PATCH": 0,
            "SUFFIX": "alpha"
        },

    })
})

module.exports = router