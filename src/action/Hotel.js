

import { GetHotelsReq,GetHotelsSuccess,GetHotelsFail,fGetHotelsReq ,fGetHotelsSuccess,fGetHotelsFail,
    cGetHotelsReq ,cGetHotelsSuccess,cGetHotelsFail,GetHotelByidReq,GetHotelByidSuccess,GetHotelByidFails,GetRommslByidReq,GetRommslByidSuccess,GetRommslByidFails
} from "../constant/constant";
 import axios from 'axios'

export const GetHotels=()=>{

   return async( dispatch)=>{
    dispatch({
        type:GetHotelsReq
    })

    axios.get('http://localhost:5000/countbytpe').then((res)=>{
        dispatch({
            type:GetHotelsSuccess,
            payload:res.data

        })
    })

    dispatch({
        type:GetHotelsFail
    })
   }  

}



export const GetHotelsFeatured=()=>{
    return async( dispatch)=>{
     dispatch({
         type:fGetHotelsReq
     })
 
     axios.get('http://localhost:5000/GetHotels?featured=false').then((res)=>{
         dispatch({
             type:fGetHotelsSuccess,
             payload:res.data
         })
     })
     dispatch({
         type:fGetHotelsFail
     })
    }  
 
 }


 

export const GetHotelsbyCity=(city,min,max)=>{
    console.log(city)
    return async( dispatch)=>{
     dispatch({
         type:cGetHotelsReq
     })
     axios.get(`http://localhost:5000/countbycity?city=${city}`).then((res)=>{
        console.log(res.data)
         dispatch({
             type:cGetHotelsSuccess,
             payload:res.data
         })
     })
     dispatch({
         type:cGetHotelsFail
     })
    }  
 
 }



 export const GetHotelsbyId=(id)=>{
    return async( dispatch)=>{
     dispatch({
         type:GetHotelByidReq
     })
     axios.get(`http://localhost:5000/getHotelByid/${id}`).then((res)=>{
        console.log(res.data)
         dispatch({
             type:GetHotelByidSuccess,
             payload:res.data
         })
     })
     dispatch({
         type:GetHotelByidFails
     })
    }  
 
 }



 export const GetRommssbyId=(id)=>{
    return async( dispatch)=>{
     dispatch({
         type:GetRommslByidReq
     })
     axios.get(`http://localhost:5000/GetHotelsByROOM/${id}`).then((res)=>{
        console.log(res.data)
         dispatch({
             type:GetRommslByidSuccess,
             payload:res.data
         })
     })
     dispatch({
         type:GetRommslByidFails
     })
    }  
 
 }


