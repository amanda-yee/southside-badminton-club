import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const MapContainer = () => {
  const containerStyle = {
    width: '800px',
    height: '400px',
  };

  const center = {
    lat: -28.077483,
    lng: 153.411802, 
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyBVAY4IkVjYuquaoaPR8hELq0iHjniYbJM">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
      >

      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
