import React from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

const Map = () => {
  const containerStyle = {
    width: '600px',
    height: '400px',
  };

  const center = {
    lat: -28.0774833172062,
    lng: 153.411801724741, 
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyBVAY4IkVjYuquaoaPR8hELq0iHjniYbJM">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
      >
        <Marker position={center}/>
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
