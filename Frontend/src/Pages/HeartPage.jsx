import React from "react";

import "./HeartPage.css";
import DataBox from "../Components/DataBox";
import heart from "../images/heart.png";
import other from "../images/diabetes.png";
import NavBar from "../Components/NavBar";

function HeartPage() {
  return (
    <div className="home">
      <NavBar></NavBar>
      <div>
        <div className="principale">
          <DataBox
            ClassName="heart-box"
            link="/heartHistoryPage"
            logoSrc={heart}
            title="Heart Rate"
            subtitle="Heart Rate: 75 bpm"
          />

          <DataBox
            ClassName="location-box"
            link="#"
            logoSrc={other}
            title="Sugar Level"
            subtitle="Sugar Level: 100 mg/dL"
          />

          <DataBox
            ClassName="calendar-box"
            link="#"
            logoSrc={other}
            title="Pressure"
            subtitle="Pressure: 120/80 mmHg"
          />

        </div>
      </div>
    </div>
  );
}

export default HeartPage;
