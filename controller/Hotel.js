
const HotelSchema=require('../model/Hotelschema')



  
exports.HotelAdd = async (req, res) => {
    try {
      const data = req.body;
      const newHotel = await HotelSchema.create(data);
      res.status(201).json({ hotel: newHotel });
    } catch (error) {
      console.error(error.message);
      res.status(400).json({ msg: `Error adding hotel: ${error.message}` });
    }
  };
  

  
  exports.getHotelByid = async (req, res) => {
    try{

  const id=req.params.id

   const Hotels=await HotelSchema.findById(id)
   res.status(201).json({Hotels})


    }catch(error){
      res.status(201).json({error})
    }
  };
  


  exports.UpdateRoom=async(req,res)=>{

   try{

  const updateHotel=await HotelSchema.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
   res.status(200).json({updateHotel})
  
   } catch(error){
    res.status(200).json({error})

   }


  }


  exports.deleteroom=async(req,res)=>{
    try{
 
   const updateHotel=await HotelSchema.findByIdAndRemove(req.params.id)
    res.status(200).json({msg:"Delteteed"})
   
    } catch(error){
     res.status(200).json({error})
    }
   }




   exports.GetHotel = async (req, res) => {
    const { min, max, limit, ...other } = req.query;
  
    const options = {};
    if (limit) {
      options.limit = parseInt(limit); // parse limit value to a number
    }
  
    const Hotels = await HotelSchema.find(req.query, options);
  
    if (Hotels.length > 0) {
      res.status(200).json({ Hotels });
    } else {
      res.status(404).json({ msg: "No hotels found" });
    }
  };


   exports.countbycity=async(req,res)=>{
     
    const cities=req.query.city.split(",")
      try{
  const list=await Promise.all(cities.map(city=>{
    return HotelSchema.find({city:city})
  }))
  res.status(200).json({list})
      }catch(error){
   res.status(400).json({error})
      }
   }  


   exports.countbyType = async (req, res) => {
    try {
      const HotelCount = await HotelSchema.countDocuments({ type: 'hotel' })
      const appartentCount = await HotelSchema.countDocuments({ type: 'apartment' })
      const resortCount = await HotelSchema.countDocuments({ type: 'resort' })
      const vilaCount = await HotelSchema.countDocuments({ type: 'Vila' })
      const cabitcount = await HotelSchema.countDocuments({ type: 'cabitcount' })
  
      res.status(200).json([
        { type: 'hotel', count: HotelCount },
        { type: 'apartment', count: appartentCount },
        { type: 'resort', count: resortCount },
        { type: 'Vila', count: vilaCount },
        { type: 'cabitcount', count: cabitcount }
      ])
    } catch (error) {
      res.status(400).json({ error })
    }
  }


