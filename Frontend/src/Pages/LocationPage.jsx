import React, { useEffect, useState } from "react";
import "./LocationPage.css";
import NavBar from "../Components/NavBar";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import customIconUrl from "../images/icon.png"; // Import the image

function LocationPage() {
    const [userLocation, setUserLocation] = useState(null);

    useEffect(() => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setUserLocation([latitude, longitude]);
          },
          (error) => {
            console.error("Error getting user location:", error.message);
          },
          {
            enableHighAccuracy: true, // Request high accuracy (if available)
            timeout: 5000,            // Set a timeout (in milliseconds)
            maximumAge: 0             // Force a fresh location reading
          }
        );
      } else {
        console.error("Geolocation is not supported by your browser.");
      }
    }, []);
  
    useEffect(() => {
      console.log("userLocation:", userLocation);
    }, [userLocation]);

  const customIcon = new Icon({
    iconUrl: customIconUrl,
    iconSize: [38, 38],
  });


  return (
    <div className="location-page">
        <div className="navbar">
        <NavBar />
        </div>
        <div  className="leaflet-container-wrapper">
        {userLocation && (
      <MapContainer center={userLocation} zoom={13} className="leaflet-container">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
          <Marker position={userLocation} icon={customIcon} >
            <Popup>Hello this is me</Popup>
          </Marker>
      </MapContainer>
        )}
    </div>
    </div>
  );
}

export default LocationPage;
