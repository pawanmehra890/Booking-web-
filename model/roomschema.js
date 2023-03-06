
const mongoose=require('mongoose')



const RoomSchema = new mongoose.Schema(
    {
      title: {
        type: String,
        // required: true,
      },
      price: {
        type: Number,
        // required: true,
      },
      maxPeople: {
        type: Number,
        // required: true,
      },
      desc: {
        type: String,
        // required: true,
      },
      roomNumbers: [{ number: Number, unavailableDates: {type: [Date]}}],
    },
    { timestamps: true }
  );






// [
//  {number:101,unavailableDates:[01.5,05,2022,02.05,2022]}
// ]
module.exports=mongoose.model('rooms',RoomSchema)