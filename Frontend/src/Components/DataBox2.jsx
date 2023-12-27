// components/DataBox.js
import React from 'react';
import "./DataBox.css";

const DataBox = ({ link, title, subtitle }) => {
  return (
    <a href={link}>
      <div className="data-box">
        <div className="inner-box">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
      </div>
    </a>
  );
};

export default DataBox;
