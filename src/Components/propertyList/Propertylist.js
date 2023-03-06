import "./propertylist.css";
import React, { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { GetHotels } from "../../action/Hotel";
const Propertylist = () => {

    
 const Hotels=useSelector((state)=>state.Hotel.Hotels)
 console.log(Hotels)

 const dispatch=useDispatch()

 useEffect(()=>{
  dispatch(GetHotels())
 },[dispatch])


  return (
    <div className="pList">

    {
      Hotels.map((data)=>{
return(
  <>
  <div className="pListItem">
  <img src="https://q-xx.bstatic.com/xdata/images/region/300x240/49646.jpg?k=b7f38878b9164ee38e0b99c4d4646dbea76b7bf4add8464b1aa75e4c9d0efc6e&o=" alt="" className="pListImg" />
  <div className="pListTitles">
    <h1>{data.type}</h1>
    <h2>{data.count} hotes</h2>
  </div>
</div>
  </>
)


      })
    }
    
</div>

  );
};

export default Propertylist;
