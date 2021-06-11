//importation
const express=require('express')
const connect=require("./config/connectDB")
const mongoose=require('mongoose')
const dotenv = require("dotenv");
dotenv.config();
//require Schema
const User=require("./models/User")
//instanciation

const app=express()


//middelware
app.use(express.json())

//connect DB
connect()

//****routes*****//
//@PATH  http://localhost:4000/all_users
//methode get all users
//accés private or public
app.get('/all_users',async(req,res)=>{
    try{
        const users=await User.find()
        res.json({msg:"data fetched",users})
    }
    catch(err){console.log(err)}
})

//@PATH    http://localhost:4000/addNewUser
//methode  post(add) or create new user
//accés private or public
app.post('/addNewUser',async(req,res)=>{
    try{
        const newUser=new User({...req.body})
        const user=await newUser.save()
        res.json({msg:"user added",user})
    }
    catch(err){console.log(err)}
})

// //@PATH  http://localhost:4000/user_Edited/:id
// //methode  put(update)or edit user
// //accés private or public
app.put('/user_Edited/:id',async(req,res)=>{
    try{
        
        const user=await User.findOneAndUpdate({_id:req.params.id},{$set:{...req.body}})
        res.json({msg:"user edited",user})
    }
    catch(err){console.log(err)}
})
// //@PATH   http://localhost:4000/deleteUser/:id
// //methode  delete user
// //accés private or public
app.delete('/deleteUser/:id',async(req,res)=>{
    try{
        
        const user=await User.findOneAndDelete({_id:req.params.id})
        res.json({msg:"user deleted",user})
    }
    catch(err){console.log(err)}
})
//port
const PORT =process.env.PORT 
app.listen(PORT,()=>{
console.log(`Server Running on port ${PORT}`);
});

