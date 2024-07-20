const express = require('express');
const router = express.Router();

const categories =  require('../data/catagories')
const  catagory = require('../model/catagory.model')
router.route('/').get(async (req,res)=>{
    try{
        const catagorydata = await catagory.find({})
        res.json(catagorydata)
    }
    catch(err){
        console.log(err);
    }
})

module.exports = router;

