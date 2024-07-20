const express = require("express")
const router = express.Router()

const wishlist = require("../controller/wishlistcontroller")
const verifyuser = require("../Middleware/verifyuser");

router.route("/add")
    .post(verifyuser,wishlist.createwishlist);
router.route("/watch")
    .get(verifyuser,wishlist.watchwishlist);
router.route("/watch")
    .delete(verifyuser,wishlist.deletewishlist);
module.exports = router;