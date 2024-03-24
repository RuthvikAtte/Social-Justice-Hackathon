// import Map from './components/Map';
import React,{useState} from 'react';
import {APIProvider, Map,AdvancedMarker,Pin,InfoWindow,} from "@vis.gl/react-google-maps";
function App() {
  const position ={lat:53.54,lng:10}
  return (
    <APIProvider apiKey='AIzaSyBWzGNxAgTkCsGIjNj5iWB8f1JR8PMsPF8'>
      <div style={{height:"100vh"}}>
        <Map zoom={9} center={position} mapId={"424cd75cb51ec1bc"}></Map>
      </div>
    </APIProvider>
  );
}

export default App;
