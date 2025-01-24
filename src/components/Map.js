import React from 'react';
import { GoogleMap, Marker, LoadScript, InfoWindow } from '@react-google-maps/api';

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

        <InfoWindow position={center}>
          <div>
            <p><b>Southside Badminton Club</b></p>
            <p>Lot 22 Assembly Drive, Varsity Lakes QLD 4227, Australia</p>
          </div>
        </InfoWindow>
        
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
