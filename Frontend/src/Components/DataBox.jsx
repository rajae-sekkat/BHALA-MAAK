// components/DataBox.js
import React from 'react';
import "./DataBox.css";

const DataBox = ({ link, logoSrc, title, subtitle, ClassName }) => {
  return (
    <a href={link}>
      <div className={ClassName}>
        <img src={logoSrc} alt={`${title} Logo`} className="logo" />
        <div className="inner-box">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
      </div>
    </a>
  );
};

export default DataBox;
