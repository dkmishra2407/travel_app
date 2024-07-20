const mongoose = require("mongoose")
const express = require('express')
const router = express.Router()

const hotels = require('../data/hotels')
const Hotel = require('../model/hotel.model')

router.route("/")
   .post(async (req,res) =>{
    try{
         await Hotel.deleteMany({}); //This line attempts to remove all documents from the Hotel collection in the database
        const hotelisindb =  await  Hotel.insertMany(hotels.data);//This line inserts multiple documents into the Hotel collection.
        res.json(hotelisindb)
    }
    catch(err){
        console.log(err)
        console.log("ERROR WHILE  ADDING THE DATA TO THE DATABASE")
    }
   })

   module.exports  =  router
