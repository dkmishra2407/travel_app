const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.DATABASE_URL, 
            //{ useNewUrlParser: true },
           // { useUnifiedTopology: true } // THIS FOR THE HANDLING THE ERROR AT THE TIME OF THE CONNECTING 
    
        )
    }
    catch(err){
        console.log(err)
    }
}

module.exports = connectDB;