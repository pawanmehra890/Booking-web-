
const mongoose=require('mongoose')


const HotelSchema=mongoose.Schema({


 name:{
    type:String
 },
 type:{
  
    type:String
 },
 city:{
    type:String
 },
 address:{
 type:String

 },

  distance:{
    type:String
  },
  address:{
  
  type:String

  },
  photos:{
    type:[String]
  },
  desc:{
    String
  },
  rating:{
  type:Number,
  min:0,
  max:5
  },
  rooms:{
    type:[String]
  },
  cheapesPrice:{
    type:Number
  },
  featured:{
   type:Boolean,
   default:false
  }

})


module.exports=mongoose.model('BooksRoom',HotelSchema)