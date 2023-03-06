
const RoomSchema=require('../model/roomschema')
const Hotel=require('../model/Hotelschema')

exports.createRooms = async (req, res, next) => {
    const hotelId = req.params.hotelid;
    const newRoom = new RoomSchema(req.body);
  
    try {
      const savedRoom = await newRoom.save();
      try {
        await Hotel.findByIdAndUpdate(hotelId, {
          $push: { rooms: savedRoom._id },
        });
      } catch (err) {
        next(err);
      }
      res.status(200).json(savedRoom);
    } catch (err) {
      next(err);
    }
  };
 
