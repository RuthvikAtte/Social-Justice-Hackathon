// import Map from './components/Map';
"use client"
import React,{useState} from 'react';
import airData from './Ait_Pollution_Data.json'
import Map from "./components/Map"
import ToggleSwitch from './components/toggleswitch';
function App() {

  let redVal=0;
  const toggle=(num)=>{
    redVal=200;
  }

  return (
    <>
    <Map color={redVal}/>
    <ToggleSwitch onToggle={toggle}/>
    </>
  );
}

export default App;
