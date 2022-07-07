import React, {useState} from "react";
import Menu from "./Menu";
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import Card from "./Card";

const Body = () => {
  const [dateValue,setDate] = useState("Select Move-in date");
  const [val,setval] = useState(false);
  const [min,setmin] = useState("500");
  const [mid,setmid] = useState("5000");
  const [max,setmax] = useState("5000");
  const [priceval,setpriceVal] = useState(false);
  const [proptype,setproptype] = useState("House");
  const [dochangeprop,setchangeprop] = useState(false);
  const handle = () => {
    setval(true)
  }
  const handleprice = () => {
    setmid(min)
    setpriceVal(true)
  }
  const handleproptype = () => {
    setproptype("House");
    setchangeprop(true);
  }
  const changedate = () => {
     if(val) {return (
         <div>
            <input id="dateinput" type="date" onChange={(e) => {
              if(e.target.value)
              setDate(e.target.value)
              else
              setDate("Select Move-in date")
              }}/>
              <button onClick={() => setval(false)} style={{"border":"0px",
              "font-size":"14px",
              "padding":"0px",
              "margin":"0px",
              "margin-left":"170px",
              "background-color":"rgb(137, 132, 211)",
              "width":"60px",
            "border-radius":"5px"
            }}>submit</button>
          </div>
      )}
  }
  const changeprice = () => {
    if(priceval) {
      return(
        <div>
            <input type="range" min={min} max={max} id="priceinput" onChange = {(e) =>{
              setmid(e.target.value);
            }} />
            <button onClick={() => setpriceVal(false)} style={{"border":"0px",
            "font-size":"14px",
            "padding":"0px",
            "margin":"0px",
            "margin-left":"10px",
            "background-color":"rgb(137, 132, 211)",
            "width":"60px",
            "border-radius":"5px"
          }}>submit</button>
        </div>
      )
    }
  }
  const changeproperty = () => {
    if(dochangeprop){
      return (
        <div>
          <select className = "Property_Typ" name="Property_Typ" id="Property_Typ" onChange={(e) => {
            setproptype(e.target.value);
            setchangeprop(false);
          }}>
                <option id="Ho">House</option>
                <option id="Ft">Flats</option>
                <option id="Rf">Rooftop</option>
          </select>
        </div>
      )
    }
    
  }
    return(
        <div className="body">
            <Menu />
            <div className="bodypart">
              <h1>Search properties to rent</h1>
              <div className="Input">
                <input placeholder="SearchwithSearchBar"/>
                <div className="DwnCrclIcon">
                    <ExpandCircleDownOutlinedIcon />
                </div>
              </div>
            </div>
            <div className="Selectionbodypart">
                <div className="subSelection">
                  <div className="location">
                      <h4>Location</h4>
                      <p className="CountryLocation">New York,USA</p>
                  </div>
                  <div className="date">
                      <h4>When</h4>
                      <div className="dateanswerpart">
                        <p>{dateValue}</p>
                        <button className="CalendarMonthIcon"  onClick={handle}>
                          <CalendarMonthIcon />
                        </button>
                      </div>
                      {changedate()}
                  </div>
                  <div className="Price">
                      <h4>Price</h4>
                      <div className="priceanswerpart">
                        <p>${min}-${mid}</p>
                        <button className="ExpandCircleDownIcon"  onClick={handleprice}>
                          <ExpandCircleDownIcon />
                        </button>
                      </div>
                      {changeprice()}
                  </div>
                  <div className="Property_Type">
                      <h4>Property Type</h4>
                      <div className="priceanswerpart">
                        <p>{proptype}</p>
                        <button className="ExpandCircleDownIcon"  onClick={handleproptype}>
                          <ExpandCircleDownIcon />
                        </button>
                      </div>
                      {changeproperty()}
                  </div>
                  <button className = "Search">Search</button>
                </div>
            </div>
            <div className="CardContainer">
              <div className="Cardsareput">
                <Card price="2,095" owner="Palm Harbor" description="2699 Green Valley,Highland Lake,FL" bed="3" bath="2" breadth="4" height="5" imgurl="../img/house1.jpg" />
                <Card price="2,700" owner="Beverly Springfeld" description="2821 Lake Sevilla,Palm Harbor,TX" bed="4" bath="2" breadth="6" height="7.5" imgurl="../img/house2.jpg" />
                <Card price="4,550" owner="Faulkner Ave" description="909 Woodland St, Michigan,IN" bed="4" bath="3" breadth="8" height="10" imgurl="../img/house3.jpg" />
                <Card price="4,098" owner="AKA Times Square" description="123W 44th St, New York, NY, USA" bed="5" bath="3" breadth="9" height="12" imgurl="../img/house4.jpg" />
                <Card price="5,000" owner="Midtown Retreat" description=" Midtown, Manhattan ,NY,USA" bed="5" bath="2" breadth="8" height="8" imgurl="../img/house5.jpg" />
                <Card price="3,000" owner="North Harbour" description="West Lake Drive,Montauk,NY,USA" bed="4" bath="2" breadth="10" height="11" imgurl="../img/house6.jpg" />
              </div>
            </div>
        </div>
    )
}

export default Body;