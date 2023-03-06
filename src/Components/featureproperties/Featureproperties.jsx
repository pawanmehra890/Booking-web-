import "./featureproperties.css";
import React, { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { GetHotelsFeatured } from "../../action/Hotel";
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Button, ButtonGroup,SimpleGrid ,Heading,Text,Divider,Stack,Image} from '@chakra-ui/react'

const Featureproperties = () => {

  const Hotels=useSelector((state)=>state.Hotel.FHotels.Hotels)
  console.log(Hotels)
 
  const dispatch=useDispatch()
 
  useEffect(()=>{
   dispatch(GetHotelsFeatured())
  },[dispatch])
 

  return (
    <>
    

      <div className="fp">

    {
     Hotels&& Hotels.map((data)=>{
 return(
  <>
         <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/421853145.webp?k=140bfc6c54ee753d4a748ee7b5a86c00c988e6fc9bb340c87172ead66a3ea9d5&o=&s=1"
          alt=""
          className="fpImage"
        />
        <span className="fpName">{data.name}</span>
        <span className="fpCity">{data.city}</span>
        <span className="fpPrice">{data.price}</span>
        <div className="fpRating">
          <button>{data.rating}</button>
          <span>Excellent</span>
        </div>
      </div>
  </>
 )
      })
    }
      </div>
      

    </>
  );
};

export default Featureproperties;
