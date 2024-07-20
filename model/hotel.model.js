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

const hotelSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    imageArr: { type: Array, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, required: true },
    numberOfBathrooms: { type: Number, required: true },
    numberOfBeds: { type: Number, required: true },
    numberOfguest: { type: Number, required: true },
    numberOfBedrooms: { type: Number, required: true },
    numberOfStudies: { type: Number, required: true },
    hostName: { type: String, required: true },
    hostJoinedOn: { type: String, required: true },
    ameneties: { type: Array, required: true },
    healthAndSafety: { type: Array, required: true },
    houseRules: { type: Array, required: true },
    propertyType: { type: String, required: true },
    isCancelable: { type: Boolean, required: true },
})

const Hotel = mongoose.model("Hotel", hotelSchema);

module.exports = Hotel;