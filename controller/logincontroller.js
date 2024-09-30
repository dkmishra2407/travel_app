const jwt  = require("jsonwebtoken");
const User = require("../model/user.model");
const crypto = require("crypto-js");

const logincontroller = async (req,res)=>{
    try{

         const user = await User.findOne({ number: req.body.number});
         !user && res.status(401).json({message: "NO USER FOUND"});

         const decoded_pass = await crypto.AES.decrypt(user.password,process.env.SECRET_KEY).toString(crypto.enc.Utf8);
         decoded_pass !== req.body.password && res.status(401).json({message: "PASSWORDS DO NOT MATCH"})

         const { password , ...rest } = user._doc
         const access_key = jwt.sign({ username : user.username } , process.env.ACCESS_TOKEN_KEY)

         res.json({rest,access_key});
    }
    catch(err){
        console.log(err)
    }
}

module.exports = logincontroller;

