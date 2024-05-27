const express = require("express");

const router = express.Router();
const { mongoconfig } = require("../config/mongoconfig.js");

router.use(mongoconfig);

router.route("/signup").post(require("../controllers/addUserdata.js"));
router.route("/login").post(require("../controllers/login.js"));
router.route("/addprop").post(require("../controllers/addproperty.js"));
router.route("/getprop").get(require("../controllers/getproperty.js"));
router.route("/getusr").post(require("../controllers/getuser.js"));
//router.route("/getdata").post(require("../controllers/getdbdata"));

module.exports = router;
