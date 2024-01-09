import React from "react";
import "./VitalParameterPage.css";
import NavBar from "../Components/NavBar";
import HeartRate from "../Components/HeartRate";
import TemperatureComponent from "../Components/TemperatureComponent";
import SugarLevel from "../Components/SugarLevel";
import PressureLevel from "../Components/PressureLevel";

function VitalParameterPage() { 

  return (
    <body >
      
      <NavBar></NavBar>

      <div className="principale">
          
          <HeartRate></HeartRate>
          <SugarLevel></SugarLevel>
           <PressureLevel></PressureLevel>
          <TemperatureComponent></TemperatureComponent>
          

        </div>
      
    </body>
  );
}

export default VitalParameterPage;
