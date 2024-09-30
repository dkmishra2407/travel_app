const Wishlist = require("../model/wishlist.model");

const createwishlist = async (req, res) => {
    const newWishlist = req.body;
    try {
        const savedWishlist = await new Wishlist(newWishlist).save();
        res.status(201).json(savedWishlist);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
}


const watchwishlist = async (req, res) => {
    const { hotelId } = req.query;

    try {
        const wishlistWatch = await Wishlist.findOne({ hotelId });
        res.status(200).json(wishlistWatch);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

// FOR DELETING THE WATCHLIST
const deletewishlist =  async (req, res) =>{
    const { hotelId } = req.query;

    try {
        const wishlistWatch = await Wishlist.findOneAndDelete({ hotelId });
        res.status(200).json(wishlistWatch);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

module.exports = { createwishlist,deletewishlist,watchwishlist };


