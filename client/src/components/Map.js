import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';

const MapContainer = () => {

  const [apiKey, setApiKey] = useState("");
  const serverUrl = window.location.hostname === 'localhost' 
    ? 'http://localhost:5000' 
    : 'https://southside-badminton-club.onrender.com';

  // Fetch the API key from the server on component mount
  useEffect(() => {
    const fetchKey = async () => {
        try {
            const response = await fetch(`${serverUrl}/api/google-maps`);
            
            if (response.ok) {
                const data = await response.json(); // Parse JSON data from the response
                setApiKey(data.apiKey);
              } else {
                console.error('Failed to fetch API key needed for map.', response.status);
              }
        } catch (error) {
            console.error('Error fetching key:', error);
        }
    };

    fetchKey();
  }, [serverUrl]);

  if (!apiKey) {
    return <div>Loading map...</div>; // display message until the API key is set
  }
  
  const containerStyle = {
    width: '90%',
    maxWidth: '1100px',
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
