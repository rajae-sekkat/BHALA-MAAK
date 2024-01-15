import React from "react";
import "./NavBareStyles.css"
import logo from '../images/logo.jpeg';
function NavBar() {

return (
    <nav className="navbar">
            <img src={logo} className="nav-logo" alt="" />
            <ul className="nav-links-container">
                <li className="nav-link-item"><a href="/" className="nav-link">Home</a></li>
                <li className="nav-link-item"><a href="/VitalParameterPage" className="nav-link">Vital Parameters</a></li>
                <li className="nav-link-item"><a href="/LocationPage" className="nav-link">Location</a></li>
                <li className="nav-link-item"><a href="/Calender" className="nav-link">Calender</a></li>
                <li className="nav-link-item"><a href="#" className="nav-link">contact us</a></li>
                <li className="nav-link-item"><a href="#" className="nav-btn">My acount</a></li>
            </ul>
        </nav>
)

}

export default NavBar;