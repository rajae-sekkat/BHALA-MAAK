import React from "react";
import  { useState } from 'react';

function  SugarLevel(){

  const [showPopup, setShowPopup] = useState(false);
  const [newSugarLevel, setNewSugarLevel] = useState('');
  const [currentSugarLevel, setCurrentSugarLevel] = useState('100 mg/dL');

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const updateSugarLevel = () => {
    setCurrentSugarLevel(`Sugar Level: ${newSugarLevel} mg/dL`);
    closePopup();
  };



    return (

        <section>
        {showPopup ? (
            <div className="popup">
              <label htmlFor="newSugarLevel">Enter your new sugar level:</label>
              <input
                type="text"
                id="newSugarLevel"
                value={newSugarLevel}
                onChange={(e) => setNewSugarLevel(e.target.value)}
                placeholder="e.g., 120 mg/dL"
              />
              <button onClick={updateSugarLevel}>Update</button>
              <button onClick={closePopup}>Close</button>
              <button>History</button>
            </div>
          ) : (
            <div onClick={openPopup}>
              <p className="text">Your Current Sugar Level</p>
              <p>{currentSugarLevel}</p>
            </div>
          )}
          </section>
          
    

    )
}

export default SugarLevel;