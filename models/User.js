const mongoose=require('mongoose')

const UserSchema=new mongoose.Schema ({
    name:{type:String

    },
    adresse:{type:String

    },
    email:{type:String

    },
    tel:{type:Number

    },
    dateDeNaissance:{
        type:Date
    }

})
module.exports=mongoose.model("Users",UserSchema)



