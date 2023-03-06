
const UsermODEL=require('../model/user')



  
exports.Adduser = async (req, res) => {
    try {
      const data = req.body;
      const newHotel = await UsermODEL.create(data);
      res.status(201).json({ hotel: newHotel });
    } catch (error) {
      console.error(error.message);
      res.status(400).json({ msg: `Error adding hotel: ${error.message}` });
    }
  };
  



  exports.updateUser=async(req,res)=>{

   try{

  const updateHotel=await UsermODEL.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
   res.status(200).json({updateHotel})
  
   } catch(error){
    res.status(200).json({error})

   }


  }


  exports.deleteUSER=async(req,res)=>{

    try{
 
   const updateHotel=await UsermODEL.findByIdAndRemove(req.params.id)
    res.status(200).json({msg:"Delteteed"})
   
    } catch(error){
     res.status(200).json({error})
 
    }
 
 
   }



   exports.getuser=async(req,res)=>{
    
    const Hotels=await UsermODEL.find()
   if(Hotels){
    res.status(201).json({Hotels})
   }else{
    res.status(201).json({msg:"noT HOTEL FOUDN"})
   }

   }  