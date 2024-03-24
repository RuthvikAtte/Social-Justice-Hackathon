// import Map from './components/Map';
"use client"
import React,{useState} from 'react';
import airData from './Ait_Pollution_Data.json'
import Map from "./components/Map"
function App() {
  const [map,setMap]=useState(null);

const {isLoaded}=useJsApiLoader({
  googleMapsApiKey:'AIzaSyBWzGNxAgTkCsGIjNj5iWB8f1JR8PMsPF8',
  libraries:['visualization']
})

if(!isLoaded){
  return <div>Loading...</div>
}
  const center ={lat:40.7128,lng:-74.0060}
  return (
    <Map/>
  );
}

export default App;
