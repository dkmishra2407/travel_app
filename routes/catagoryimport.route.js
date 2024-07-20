const express = require('express');
const catagories = require("../data/catagories"); // Importing categories data
const catagoy = require("../model/catagory.model"); // Importing the category model

const router = express.Router();

router.route("/")
    .post(async (req, res) => {
        try {
            await catagoy.deleteMany({}); // Clear existing categories
            const catagory = await catagoy.insertMany(catagories.data); // Insert new categories
            res.json(catagory); // Respond with the inserted categories
        } catch (err) {
            console.log(err); // Log the error
            console.log("DATA NOT FOUND"); // Log a custom message
            res.status(500).json({ message: "An error occurred while inserting categories", error: err.message }); // Send error response
        }
    });

module.exports = router;
