import React from "react";
import "./NavBareStyles.css";
import logo from "../images/logo.jpeg";
function NavBare() {
  return (
    <nav className="navbar">
      <img src={logo} className="nav-logo" alt="" />
      <ul className="nav-links-container">
        <li className="nav-link-item">
          <a href="/" className="nav-link">
            home
          </a>
        </li>
        <li className="nav-link-item">
          <a href="features.html" className="nav-link">
            features
          </a>
        </li>
        <li className="nav-link-item">
          <a href="plan.html" className="nav-link">
            Plan&Pricing
          </a>
        </li>
        <li className="nav-link-item">
          <a href="contactUs.html" className="nav-link">
            contact us
          </a>
        </li>
        <li className="nav-link-item">
          <a href="/Demo" className="nav-btn">
            Get a Demo
          </a>
        </li>
        <li className="nav-link-item">
          <a href="/Login" className="nav-btn">
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBare;
