import './App.css';
import React,{useState,useEffect,useRef} from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
function App() {

  const mapContainer=useRef(null);
  const[viewState,setViewState]=useState({
    center:[264,38],
    zoom:4,
    pitch:0
  })
  useEffect(()=>{
    const map=new maplibregl.Map({
      container:mapContainer.current,
      style:'https://tiles.basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json',
      ...viewState,
    })

    return ()=>{
      map.remove();
    };
  },[]);

  return (
    <>
      <div ref={mapContainer} style={{width:'100%',height:'90%',marginTop:'20px',position:'absolute'}}>

      </div>
    </>
  );
}

export default App;
