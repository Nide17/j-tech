import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'
import React from 'react';

const mapStyles = {
};

const MapContainer = (props) => {

  return (
    <Map
      google={props.google}
      zoom={8}
      style={mapStyles}
      initialCenter={{ lat: -1.967222, lng: 30.055556 }}>
      <Marker position={{ lat: -1.967222, lng: 30.055556 }} />
    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDL-FYi1r7KNhBhByN2Hz0_e1GVzTTjZ6Q'
})(MapContainer);