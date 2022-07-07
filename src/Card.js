import React from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BedroomChildOutlinedIcon from '@mui/icons-material/BedroomChildOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const Card = ({price,owner,description,bed,bath,breadth,height,imgurl}) => {
    const addtag = () =>{
        if(true){
            return(
                <div>
                    <div style={{"fontSize":"13px","color":"white","backgroundColor":"rgb(137, 132, 211)","position":"absolute","top":"70.5%","width":"100px","borderRadius":"5px","boxShadow":"-10px 0px 0px 0px rgb(137, 132, 211)"}}>
                    <AutoAwesomeIcon />
                    <p style={{"display":"inline","fontWeight":"bold"}}>POPULAR</p>
                    </div>
                </div>
                
            )
        }
    }
    return (
        <div className="Maincard"> 
            <form>
            <img className = "card"src={imgurl}></img>
                <div className="cardbody">
                    <div className="Details">
                        <p className="CardPrice">${price}</p>
                        <span>/month</span>
                        <p>{owner}</p>
                        <span>{description}</span>
                    </div>
                    <button className="FavoriteBorderIcon">
                        <FavoriteBorderIcon />
                    </button>
                </div>
                <div className="CardFooter">
                   <div className="BedRoom">
                        <BedroomChildOutlinedIcon />
                        <span>{bed} Beds</span>
                   </div>
                    <div className="BathRoom">
                        <BathtubOutlinedIcon />
                        <span>{bath} Bathrooms</span>
                    </div>
                    
                   <div className="Area">
                        <HouseOutlinedIcon />
                        <span>{breadth}x{height} m2</span>
                   </div>
                </div>
            </form>
            {addtag()}
        </div>
    )
}

export default Card;