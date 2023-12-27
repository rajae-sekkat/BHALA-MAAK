import React from "react";
import "./HeaderStyles.css"
import { useNavigate } from "react-router-dom";

function Header(){

  const navigate = useNavigate();

  const login=()=>{
    event.preventDefault();
    navigate("/login");

  };

    return (
        <header className="header">
        <div className="content">
          <h3 className="heading">
            <span className="moyen">BHALA MAAK:</span>
            <span className="no-fill">
              {" "}
              Where care meets convenience, and you're always by their side
            </span>
          </h3>
        </div>
      </header>
    )
}

export default Header;