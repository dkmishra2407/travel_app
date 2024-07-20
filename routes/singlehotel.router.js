const express = require("express")
const router = express.Router()

const Hotel = require("../model/hotel.model")
router.route("/:id").get(async (req,res)=>{
    try{
        const { id } = req.params;
        const Hotelsearched = await Hotel.findById(id);
        res.json(Hotelsearched) 
    }
    catch(err){
        console.log(err)
    }
})

module.exports=router;