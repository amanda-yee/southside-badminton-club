import React from 'react';
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';

const MapContainer = () => {

  const apiKey = "AIzaSyBVAY4IkVjYuquaoaPR8hELq0iHjniYbJM"; //process.env.REACT_APP_GOOGLE_API_KEY;
  
  const containerStyle = {
    width: '75%',
    height: '300px',
  };

  const center = {
    lat: -28.077483,
    lng: 153.411802, 
  };

  const placeName = "Southside Badminton Club Gold Coast"; 
  
  // opens Google directions to place in new tab
  const handleMapClick = () => {
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(placeName)}`;
    window.open(googleMapsUrl, '_blank');
  };

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        options={{
          mapTypeControl: false,
          streetViewControl: false,
          zoomControl: false,
          fullscreenControl: false
        }}
        onClick={handleMapClick}
      >

        <MarkerF position={center} title="Southside Badminton Club" onClick={handleMapClick}/>

      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
