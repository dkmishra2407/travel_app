// const mongoose = require("mongoose")

// const hotelschema = mongoose.Schema({
//             name: { type: String , require: true},
//             category: { type: String , require: true},
//             image: { type: String , require: true},
//             imageArr:{ type: String , require: true},
//             address: { type: String , require: true},
//             city: { type: String , require: true},
//             state: { type: String , require: true},
//             country: { type: String , require: true},
//             price: { type: Number , require: true},
//             rating: { type: Number , require: true},
//             numberOfBathrooms:{ type: Number , require: true},
//             numberOfBeds: { type: Number , require: true},
//             numberOfguest: { type: Number , require: true},
//             numberOfBedrooms: { type: Number , require: true},
//             numberOfStudies: { type: Number , require: true},
//             hostName: { type: String , require: true},
//             hostJoinedOn: { type: String , require: true},
//             ameneties:{ type: Array , require: true},
//             healthAndSafety: { type: Array , require: true},
//             houseRules: { type: Array , require: true},
//             propertyType: { type: String , require: true},
//             isCancelable: { type: Boolean , require: true},
// })

// const Hotel = mongoose.model("Hotel", hotelschema)  // IN THE DATABASEIT WILL CREATE THE ENTRY AS Hotels 
// module.exports = Hotel

const mongoose = require('mongoose');

const catagorySchema = new mongoose.Schema({
    category: { type: String, required: true }
})

const Catagory = mongoose.model("Catagory", catagorySchema);

module.exports = Catagory;