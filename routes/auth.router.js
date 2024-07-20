const express = require("express");
const router = express.Router();

const signuphandler = require("../controller/signupcontoller");
const logincontroller = require("../controller/logincontroller");

router.route("/register")
    .post(signuphandler);

router.route("/login")
   .post(logincontroller);

module.exports = router;

