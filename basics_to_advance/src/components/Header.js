import { LOGO_URL } from "../utils/constants"

const Header = () => {
        return (
            // This div is for the logo
            <div className="header">
                <div className="logo-container">
                    <img className= "logo" src={LOGO_URL}/>
                </div>
                <div className="menu-bar">
                    <ul>
                        <li>Menu</li>
                        <li>Restraunts</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                    </ul>
                </div>

            </div>
        )
    }

export default Header