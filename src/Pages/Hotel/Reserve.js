import React,{useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import { Card, CardHeader, CardBody, CardFooter,Stack,Image,Text,Button,Heading ,SimpleGrid} from '@chakra-ui/react'

import { useSelector,useDispatch } from "react-redux";
import {GetRommssbyId} from '../../action/Hotel'
const Reserve=()=>{

  

    const {id}=useParams()
    const Hotels=useSelector((state)=>state.Hotel.HotelId.list)

  console.log(Hotels)

  const dispatch=useDispatch()
 
  useEffect(()=>{
   dispatch(GetRommssbyId(id))
  },[dispatch])


    return(
        <>
<div className="d-flex justify-content-center">
<h1>Here  all the rooms</h1>
</div>
<div className="row d-flex justify-content-center">
    {
     Hotels&&   Hotels.map((data)=>{
  return(
    <>
    <div className="card mx-1" style={{ width: "18rem" }}>
  <img        src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/207770647.jpg?k=9c4dca024ee35c00afa2148afc7fea85a76ec1cc80ddab895bdca3e7db525889&o=&hp=1"
className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{data.title}</h5>
    <h5 className="card-title"> ${data.price}</h5>
    <h5 className="card-title"> People CAN  {data.maxPeople}</h5>


    <a href="#" className="btn btn-primary">Books Now</a>
  </div>
</div>  
    </>
  )
        })
    }


</div>
 </>
    )
}

export default Reserve