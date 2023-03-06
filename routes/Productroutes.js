const { Router } = require('express')
const express=require('express')
const router=express.Router()

const {VerifyToken,Usermiddleare,Adminmiddleare}=require('../middleware/middleware')
 
const {Roomdelete,RoomGet,RoomUpdate,RoomAdd,GetHotelsByROOM}=require('../controller/rooms')

const {Register,Login}=require('../controller/usercon')




const {HotelAdd,UpdateRoom,deleteroom,GetHotel,countbycity,countbyType,getHotelByid}=require('../controller/Hotel')

const {Adduser,updateUser,deleteUSER,getuser}=require('../controller/admin')


const {createRooms}=require('../controller/createRoom')


router.route('/Addhotel').post(HotelAdd)


router.route('/updateHotel/:id').put(UpdateRoom)


router.route('/deleteroom/:id').delete(deleteroom)

router.route('/GetHotel').get( GetHotel)
router.route('/getHotelByid/:id').get(getHotelByid)

router.route('/Regsiter').post(Register)
router.route('/Login').post(Login)









// user edit update get







router.route('/Adduser').post(Adduser)


router.route('/updateUser/:id').put(updateUser)


router.route('/deleteUSER/:id').delete(deleteUSER)

router.route('/getuser').get(getuser)





//rooms
router.route('/createRooms/:hotelid').put(createRooms)



router.route('/RoomUpdate/:id').put(RoomUpdate)


router.route('/Roomdelete/:id').delete(Roomdelete)

router.route('/RoomGet').get(RoomGet)










///get



router.route('/GetHotels').get(GetHotel)
router.route('/countbycity').get(countbycity)
router.route('/countbytpe').get(countbyType)


router.route('/GetHotelsByROOM/:id').get(GetHotelsByROOM)



module.exports=router