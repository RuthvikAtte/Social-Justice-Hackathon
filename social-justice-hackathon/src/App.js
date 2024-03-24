// import Map from './components/Map';
"use client"
import React,{useState} from 'react';
import airData from './Ait_Pollution_Data.json'
import Map from "./components/Map"
function App() {

if(!isLoaded){
  return <div>Loading...</div>
}
  return (
    <Map/>
  );
}

export default App;
