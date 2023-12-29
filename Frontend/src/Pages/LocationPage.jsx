import React, { useEffect, useState } from "react";
import "./LocationPage.css";
import NavBar from "../Components/NavBar";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import customIconUrl from "../images/icon.png"; // Import the image

function LocationPage() {
  const [userLocation, setUserLocation] = useState([48.8566, 2.3522]);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation([latitude, longitude]);
        },
        (error) => {
          console.error("Error getting user location:", error.message);
        }
      );
    } else {
      console.error("Geolocation is not supported by your browser.");
    }
  }, []);

  const customIcon = new Icon({
    iconUrl: customIconUrl,
    iconSize: [38, 38],
  });

  const markers = [
    {
      geocode: userLocation,
      popUp: "Hello this is me",
    },
  ];

  return (
    <div>
      <NavBar />
      <MapContainer center={userLocation} zoom={13} className="leaflet-container">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {markers.map((marker, index) => (
          <Marker position={marker.geocode} icon={customIcon} key={index}>
            <Popup>{marker.popUp}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default LocationPage;
