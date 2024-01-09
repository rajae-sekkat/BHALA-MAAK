import React from "react";
import  { useState } from 'react';

function  PressureLevel(){

   //set Current Pressure Level
   const [showPopup1, setShowPopup1] = useState(false);
   const [newPressureLevel, setNewPressureLevel] = useState('');
   const [currentPressureLevel, setCurrentPressureLevel] = useState('120/80 Hmmg');
   const openPopup1 = () => {
     setShowPopup1(true);
   };
 
   const closePopup1 = () => {
     setShowPopup1(false);
   };
 
   const updatePressureLevel = () => {
     setCurrentPressureLevel(`Pressure Level: ${newPressureLevel} mg/dL`);
     closePopup1();
   };



    return (

        <section>
        
      {showPopup1 ? (
        <div className="popup">
        <label htmlFor="newPressureLevel">Enter your new  Pressure Level:</label>
        <input
          type="text"
          id="newPressureLevel"
          value={newPressureLevel}
          onChange={(e) => setNewPressureLevel(e.target.value)}
          placeholder="e.g., 120/80 Hmmg"
        />
        <button onClick={updatePressureLevel}>Update</button>
        <button onClick={closePopup1}>Close</button>
        <button>History</button>
      </div>
      ):(

        <div  onClick={openPopup1}>
            <p className="text"> Your Current Pressure Level</p>
            <p>
            {currentPressureLevel}
            </p>
          </div>

      )}
          </section>
          
    

    )
}

export default PressureLevel;