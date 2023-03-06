import "./searchitem.css";
import React,{useEffect} from "react";
import Hotel from "../../Pages/Hotel/Hotel";
import { Link } from "react-router-dom";
const SearchItem = ({data}) => {
 
  return (
    <>
    {
      data.map((data)=>{
return(

<>
<div className="searchItem">
       <img
         src="https://cf.bstatic.com/xdata/images/hotel/square200/243142190.webp?k=d8b4b34392b3d67240ae956e702f4f6648a9c7370d3c6df7cb666d2bb9a74d70&o=&s=1"
         alt=""
         className="siImg"
       />
       <div className="siDesc">
         <h1 className="siTitle">{data.city}</h1>
         <span className="siDistance">{data.name}</span>
         <span className="siTaxiOp">{data.address}</span>
         <span className="siSubtitle">
{data.distance}
         </span>
         <span className="siFeatures">
           Entire studio * 1 bathroom * 21<sup>2</sup>  1 full bed
         </span>
         <span className="siCancelOp">Free Cancellation</span>
         <span className="siCancelOpSubtitle">
           You can cancel later, so lock in this great price today!
         </span>
       </div>
       <div className="siDetails">
         <div className="siRating">
           <span>Excellent</span>
           <button>8.9</button>
         </div>
         <div className="siDetailTexts">
           <span className="siPrice">${data.cheapesPrice}</span>
           <span className="siTaxOp">Includes taxes and fees</span>
           <button className="siCheckButton" > <Link to={`/onehotel/${data._id}`} > See Avalibility</Link></button>
         </div>
       </div>
     </div>

  
</>

)
      })
    }
      
 
  
      
    </>
   
  );
};

export default SearchItem;
