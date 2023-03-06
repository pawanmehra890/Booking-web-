
const RoomSchema=require('../model/roomschema')

const HotelSchema=require('../model/Hotelschema')

  
exports.RoomAdd = async (req, res) => {
    try {
      const data = req.body;
      const newHotel = await RoomSchema.create(data);
      res.status(201).json({ hotel: newHotel });
    } catch (error) {
      console.error(error.message);
      res.status(400).json({ msg: `Error adding hotel: ${error.message}` });
    }
  };



  

  exports.RoomUpdate=async(req,res)=>{

   try{

  const updateHotel=await RoomSchema.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
   res.status(200).json({updateHotel})
  
   } catch(error){
    res.status(200).json({error})

   }


  }


  exports.Roomdelete=async(req,res)=>{

    try{
 
   const updateHotel=await RoomSchema.findByIdAndRemove(req.params.id)
    res.status(200).json({msg:"Delteteed"})
   
    } catch(error){
     res.status(200).json({error})
 
    }
   }


   exports.RoomGet=async(req,res)=>{
  

    const Hotels=await RoomSchema.find()
   if(Hotels){
    res.status(201).json({Hotels})
   }else{
    res.status(201).json({msg:"noT HOTEL FOUDN"})
   }

   }  




   exports.GetHotelsByROOM=async(req,res)=>{
    try{

  const Hotel=await HotelSchema.findById(req.params.id)

  const list=await Promise.all(Hotel.rooms.map((room)=>{
    return RoomSchema.findById(room)
  }))
  res.status(201).json({list})

    }
    catch(error){
      res.status(201).json(error)
    }
   }