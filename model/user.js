const mongoose=require('mongoose')


const UsermODEL=mongoose.Schema({



    username:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String

    },
    isAdmin:{
     type:Boolean,
     default:false
    },
 



},
{timestamps:true}

)

module.exports=mongoose.model('UserHotel',UsermODEL)