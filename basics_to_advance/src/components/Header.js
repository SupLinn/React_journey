import { Link } from "react-router";
import { LOGO_URL } from "../utils/constants"
import { useState } from "react";

const Header = () => {
    const [btnName, setBtnName] = useState("login");
        return (
            // This div is for the logo
            <div className="header">
                <div className="logo-container">
                    <img className= "logo" src={LOGO_URL}/>
                </div>
                <div className="menu-bar">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <button className="login-btn"
                            onClick={()=>{
                                btnName === "login"? setBtnName("logout") : setBtnName("login")
                            }}>
                                {btnName}
                        </button>
                    </ul>
                </div>

            </div>
        )
    }

export default Header