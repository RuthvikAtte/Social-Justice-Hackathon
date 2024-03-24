// import Map from './components/Map';
"use client"
import React,{useState} from 'react';
import {GoogleMap,HeatmapLayer,useJsApiLoader,Marker} from '@react-google-maps/api'
import airData from './Ait_Pollution_Data.json'

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
    <div style={{height:'100vh'}}>
    <GoogleMap mapContainerStyle={{position:'relative',width:'100%',height:'100%'}}
    center={center}
    zoom={12}
    onLoad={(map)=>setMap(map)}
    >
      {map && airData &&
      <>
      <HeatmapLayer
      data={airData.map((data)=>(
        new window.google.maps.LatLng(data.latitude,data.longitude)
        ))}
        options={{
          radius:'500'
        }}
        />
        <Marker position={center}/>
        </>
        }



    </GoogleMap>
    </div>
  );
}

export default App;
