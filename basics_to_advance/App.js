import React from "react"
import ReactDOM from "react-dom/client"

const Header = () => {
    return (
        // This div is for the logo
        <div className="header">
            <div className="logo-container">
                <img className= "logo" src="https://www.shutterstock.com/shutterstock/photos/1841202208/display_1500/stock-vector-yummy-food-logo-with-funny-smiling-face-mouth-with-a-stuck-out-tongue-delicious-recipe-tasty-1841202208.jpg"/>
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

const App = () => {
    return (
        <div className="main-container">
            <Header />
        </div>
    )
    
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<App/>)