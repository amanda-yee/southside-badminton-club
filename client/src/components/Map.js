import React from 'react';
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';

const MapContainer = () => {

  const containerStyle = {
    width: '400px',
    height: '400px',
  };

  const center = {
    lat: -28.077483,
    lng: 153.411802, 
  };

  const placeName = "Southside Badminton Club Gold Coast"; // Specify the full place name

  const handleMarkerClick = () => {
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(placeName)}`;
    window.open(googleMapsUrl, '_blank'); // opens link in a new tab
  };

  return (
    // REMOVE HARD CODING OF API KEY
    <LoadScript googleMapsApiKey="AIzaSyBVAY4IkVjYuquaoaPR8hELq0iHjniYbJM">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
      >

        <MarkerF position={center} title="Southside Badminton Club" onClick={handleMarkerClick} />

      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
