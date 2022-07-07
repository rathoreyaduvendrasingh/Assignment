import React from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Menu = () => {
    return(
        <div>
            <nav>
                <div className="logoeast">
                <img src="/icon1.jpg"></img>
                <p className="eastry">Eastatery</p>
                </div>
                <ul className="list">
                    <li className="list_item">
                        <a className="nav-link active" href="#">Rent</a>
                    </li>
                    <li className="list_item">
                    <a className="nav-link" href="#">Buy</a>
                    </li>
                    <li className="list_item">
                    <a className="nav-link" href="#">Sell</a>
                    </li>
                    <li className="list_item">
                        <div className="toShow">
                        <a className="nav-link" href="#">ManageProduct</a>
                        <div className="arrow">
                        <KeyboardArrowDownIcon />
                        </div>
                        
                        </div>
                    
                    </li>
                    <li className="list_item">
                    <div className="toShow">
                        <a className="nav-link" href="#">Resources</a>
                        <div className="arrow">
                        <KeyboardArrowDownIcon />
                        </div>
                        </div>
                    </li>
                </ul>
                <div className="button">
                    <button className="btn1">Login</button>
                    <button className="btn2">Signup</button>
                </div>
                
            </nav>
        </div>
    )
}

export default Menu;