import React from "react";
import "./HeaderStyles.css"

function Header(){

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
          <a href="/Login" className="btnLog">
            Login To Start
          </a>
        </div>
      </header>
    )
}

export default Header;