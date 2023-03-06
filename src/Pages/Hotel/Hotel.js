import "./hotel.css";
import React, { useState,useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";

import { useSelector,useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {GetHotelsbyId} from '../../action/Hotel'
import {
  faAngleLeft,
  faAngleRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import Maillists from "../../Components/maillists/Maillists";
import Footer from "../../Components/footer/Footer";
import { Link, useParams } from "react-router-dom";

const Hotel = () => {
  
  const {id}=useParams()


  const Hotels=useSelector((state)=>state.Hotel.HotelId)

  console.log(Hotels)
 
  const dispatch=useDispatch()
 
  useEffect(()=>{
   dispatch(GetHotelsbyId(id))
  },[dispatch])

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);      


   
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/207770647.jpg?k=9c4dca024ee35c00afa2148afc7fea85a76ec1cc80ddab895bdca3e7db525889&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/218355469.jpg?k=0c47c2116dfe9ba0d2ee45eb057f627cef4a77cd443263ba8e681e8283e92005&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/207770601.jpg?k=df244bc83172eba6e29a0ccddc84eb883b844cde026fcce79f5daa2eb20e14e1&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/218360322.jpg?k=0de31302338d6d0e8e8f4ac9b9cdcd04311799975db613febb9c5f97dc851f4f&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/207770612.jpg?k=443a7eae7224710df024504c6dfe6b8b9868438f12188f9f29cd39d503835ea9&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/207770643.jpg?k=9179fda3e3a86754aeda637b7e526db56920c7ac8242d0b73bad67ce74d64ab0&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/325275533.jpg?k=7697a1b0176bf021b2986409dbf5e1e64a68df82aee6becd317caccf0d76f2ee&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/218359914.jpg?k=fc8a4dc1c153c04c754401bdb0be90a12c16010ed1ccb7d0b8149d48ca70ae20&o=&hp=1",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNubmer;

    if (direction === "l") {
      newSlideNubmer = slideNumber === 0 ? 5 : slideNumber - 1;
    }else {
      newSlideNubmer = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNubmer)

  };
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="closebtn"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faAngleLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="slderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faAngleRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>{Hotels.city}</span>
          </div>
          <span className="hotelDistance">
          {Hotels.distance}
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>

          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper">
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Syau in the heart of krakow</h1>
              <p className="hotelDesc">
          {Hotels.desc}
               
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>
          {Hotels.address}

              </h1>
              <span>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Molestias ipsa accusamus voluptas? Voluptate omnis architecto
                accusamus sapiente, ullam laborum vel.
              </span>
              <h2>
                <b>$
          {Hotels.cheapesPrice}
                  
                  </b> (9 nights)
              </h2>
              <button > <Link to={`/Reserve/${Hotels._id}`} > Reserve or Book Now!</Link></button>
            </div>
          </div>
        </div>
        <Maillists />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
