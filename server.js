const express = require('express')
const app = express();  // ALWAYS DECLRE FUNCTION NOT ONLY EXPRESS 
const mongoose = require("mongoose")
const hotelrouter = require("./routes/hotels.route");
const catagoriesrouter = require("./routes/catagories.route");
const connectDB = require("./config/dbconfig");
const HotelsDataDB = require("./routes/dataimport.route");
const catagoryDataDB = require("./routes/catagoryimport.route");
const singlehotelrouter = require("./routes/singlehotel.router");
const Autherisationuser = require("./routes/auth.router");
const Wishlistrouter = require("./routes/wishlist.route");
app.use(express.json())  // YOU CAN ALSO USE THE BODY PARSER ALSO HERE INSTEAD OF THIS

app.get('/', (req, res)=>{res.send("Hello World")})

app.use('/api/hotelsdata',HotelsDataDB)
app.use('/api/hotels',hotelrouter)
app.use('/api/catagoriesdata',catagoryDataDB)
app.use('/api/catagories',catagoriesrouter)
app.use('/api/hotels',singlehotelrouter)   // IF WE GIVEN ID WITH IT THEN ONLY IT WILL  RUN OTHERWISE ABOVE RUN
app.use('/api/user',Autherisationuser);
app.use('/api/wishlist',Wishlistrouter);
const PORT = 3500
connectDB()

// mongoose.connection.once THIS  FUNCTION RUN ON THE PORT ONLY WHEN THE DATABASE IS CONNECTED OTHERWISE SERVER IS NOT START ON THE PORT
mongoose.connection.once("open", () =>{
    console.log("DATABASE IS CONNECTED")
    app.listen(process.env.PORT || PORT,()=>{
        console.log(`Server is running on port ${PORT}`)
    })
}
)
