import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SugarLevel() {
  const [showPopup, setShowPopup] = useState(false);
  const [newSugarLevel, setNewSugarLevel] = useState('');
  const [currentSugarLevel, setCurrentSugarLevel] = useState('100 mg/dL');
  const [username] = useState("r_sekkat");
  const sugarLevelValue = parseFloat(newSugarLevel);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const updateSugarLevel = (event) => {
    event.preventDefault();
    const currentDate = new Date(); // Move inside the function to capture the current date and time when updating
    setCurrentSugarLevel(`Sugar Level: ${newSugarLevel} mg/dL`);
    
    axios.post("http://localhost:8081/api/add-sugar-level", { username, date: currentDate, sugarLevelValue })
      .catch((error) => {
        console.error("Erreur lors de l\'ajout du niveau de sucre :", error);
        alert("Erreur lors de l\'ajout du niveau de sucre :");
      });

    closePopup();
  };

  useEffect(() => {
    // Fetch the latest sugar level value when the component mounts
    fetchLatestSugarLevel();
  }, []); // Empty dependency array ensures it only runs once when the component mounts

  const fetchLatestSugarLevel = () => {
    axios.get("http://localhost:8081/api/latest-sugar-level", { params: { username } })
      .then((response) => {
        const latestSugarLevel = response.data.level; // Adjust the property name based on your API response
        setCurrentSugarLevel(`Sugar Level: ${latestSugarLevel} mg/dL`);
      })
      .catch((error) => {
        console.error("Error fetching latest sugar level:", error);
        setCurrentSugarLevel('Error fetching latest sugar level');
      });
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
          <button>History</button> {/* Implement the functionality for the History button */}
        </div>
      ) : (
        <div onClick={openPopup}>
          <p className="text">Your Current Sugar Level</p>
          <p>{currentSugarLevel}</p>
        </div>
      )}
    </section>
  );
}

export default SugarLevel;
