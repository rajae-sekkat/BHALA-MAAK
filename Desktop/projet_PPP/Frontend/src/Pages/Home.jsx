// App.js (ou Main.js)
import React from 'react';
import "./Home.css";
import DataBox from '../Components/DataBox';
import NavBare from '../Components/NavBare';
import heart from '../images/heart.png';
import location from '../images/location.png';
import calendar from "../images/calendar.png";
import other from "../images/diabetes.png";

function Home  ()  {
  return (
    <div className='home'>
        <NavBare></NavBare>
    <div>
      <div className="principale">
        <DataBox ClassName="heart-box"
          link="/heartPage"
          logoSrc={heart}
          title="Vital Parameters"
          subtitle=""
        />

        <DataBox
          ClassName="location-box"
          link="#"
          logoSrc={location}
          title="Real-time Location"
          subtitle="Location: XYZ"
        />

        <DataBox
          ClassName="calendar-box"
          link="#"
          logoSrc={calendar}
          title="Activities Calendar"
          subtitle="Calendar goes here..."
        />

        <DataBox
          ClassName="other-box"
          link="#"
          logoSrc={other}
          title="Other Function"
          subtitle="Details here..."
        />
      </div>
    </div>
    </div>
  );
};

export default Home;
