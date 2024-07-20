const crypto = require("crypto-js");
const User = require("../model/user.model");

const signuphandler = async (req, res) => {
    try {
        const newuser = new User({
            username: req.body.username,
            number: req.body.number, // Corrected to use 'number'
            email: req.body.email, // Corrected to use 'email'
           // password: req.body.password // Corrected to use 'password'
           password : crypto.AES.encrypt(req.body.password,process.env.SECRET_KEY).toString()  // TO CONVERT TO PASSWORD INTO THE STRING SO THAT IT WOULDNOT REPEAT
        });
        const saveduser = await newuser.save(); // Save the user to the database
        res.status(201).json(saveduser); // Respond with the saved user and a 
    } catch (err) {
        console.log(err); // Log the error
        res.status(500).json({ message: "An error occurred while registering the user", error: err.message }); // Send error response
    }
}

module.exports = signuphandler;