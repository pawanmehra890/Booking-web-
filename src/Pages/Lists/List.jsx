import "./list.css";
import React, { useState ,useEffect} from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../Components/searchItem/SearchItem";


import { useSelector,useDispatch } from "react-redux";
import { GetHotelsbyCity } from "../../action/Hotel";
const List = () => {
  const location = useLocation();

  console.log(location);
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [opendate, setOpenDate] = useState(false);
  const [Options, setOptions] = useState(location.state.Options);

  const Hotels=useSelector((state)=>state.Hotel.cHotels)
  
  console.log(Hotels)
 
  const dispatch=useDispatch()
 
  useEffect(()=>{
   dispatch(GetHotelsbyCity(destination))
  },[dispatch])
 
   
  console.log(destination)

  console.log(location);
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label htmlFor="">Destination</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="lsItem">
              <label htmlFor="">Check-in Dates</label>
              <span onClick={() => setOpenDate(!opendate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {opendate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>

            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min Price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min Price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min Price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <div className="lsOptionText">Adult</div>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={Options.adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <div className="lsOptionText">Children</div>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={Options.childrens}
                  />
                </div>
                <div className="lsOptionItem">
                  <div className="lsOptionText">Room</div>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={Options.rooms}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            {
              Hotels.map((data)=>{
                return(
                  <>
            <SearchItem data={data} />
                  
                  </>
                )
              })
            }

          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
