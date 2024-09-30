const express = require('express');
const router = express.Router();

// FIRST WE TAKE THE HOTELS DATA FROM THE LOCAL DATA FILE
// BUT IT IS NOT GOODPRACTICE SO NOW WE AFTER INSERTING THE
// DATA IN THE DATABASE WE SHOULD DO THE DYNAMIC WAY

const hotels = require("../data/hotels")

router.route("/alldata").get((req,res)=>{
    res.send(hotels)
})

// TAKING THE DATA FROM THE DATABASE
const Hotel = require("../model/hotel.model");

router.route("/")
   .get(async (req, res) => {
       const hotelcatagory = req.query.category;  // Extract category from query parameters
       try {
           const hotels = await Hotel.find({ category: hotelcatagory }); // Fetch hotels from the database
           if (hotels.length > 0) { // Check if any hotels were found
               res.json(hotels); // Respond with the found hotels
           } else {
               res.status(404).json({ message: "No hotels found" }); // Respond with 404 if no hotels are found
           }
       } catch (err) {
           console.error(err); // Log any errors
           res.status(500).json({ message: "An error occurred while fetching hotels", error: err.message }); // Respond with an error message
       }
   });

module.exports = router;