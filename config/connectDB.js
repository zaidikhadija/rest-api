//require mongoose
const mongoose=require("mongoose")
//require dotenv and path .env
require('dotenv').config({ path: './config/.env' });


const connectDB=async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI,{ useUnifiedTopology: true,useNewUrlParser: true, useCreateIndex: true })
        console.log("mongoose connected")
    } catch (error) {
        console.log(error)
    }
}
module.exports=connectDB

