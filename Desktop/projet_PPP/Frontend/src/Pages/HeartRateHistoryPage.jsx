import React from "react";
import  { useEffect } from 'react';
import "./HeartRateHistoryPage.css";

function HeartRateHistoryPage(){

        const heartRateData = [
          { date: '2023-11-01', rate: 80 },
          { date: '2023-11-02', rate: 55 },
          // Add other data entries
        ];
      
        const generateDescription = (rate) => {
          if (rate < 60) {
            return 'Low_Heart_Beat';
          } else if (rate >= 60 && rate <= 100) {
            return 'Normal_Heart_Beat';
          } else if (rate > 100) {
            return 'High_Heart_Beat';
          }
        };
      
        useEffect(() => {
          populateGrid();
        }, []);
      
        const populateGrid = () => {
          const gridContainer = document.getElementById('gridContainer');
      
          heartRateData.forEach((data) => {
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');
      
            const rateDescription = generateDescription(data.rate);
            const rateClass = rateDescription.toLowerCase();
      
            gridItem.innerHTML = (
              <div>
                <p><strong>Date: </strong>{data.date}</p>
                <p><strong>Level: </strong>{data.rate} bpm</p>
                <p><strong>Description: </strong>{rateDescription}</p>
              </div>
            );
            gridItem.classList.add(rateClass);
            gridContainer.appendChild(gridItem);
          });
        };
      

    return(

        <div>
        <nav className="navbar">
          {/* Add your navigation elements */}
        </nav>
        <div className="level">
          <h1>Heart Rate History</h1>
          <div className="grid-container" id="gridContainer">
            {/* Content will be dynamically added here */}
          </div>
        </div>
      </div>

    );
};

export default HeartRateHistoryPage ;