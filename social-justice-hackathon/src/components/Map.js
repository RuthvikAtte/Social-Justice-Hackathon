import React,{useState,useEffect,useRef} from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import airData from '../Ait_Pollution_Data.json'
import axios from 'axios';
function Map(props){
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

    const addDatasets=(map, data,source,thing) =>{
      map.addSource(source,{
        type:'geojson',
        data:data,
      })

    map.addLayer({
      id:source,
      type:'heatmap',
      source:source,
      'paint': {
                    // Increase the heatmap weight based on frequency and property magnitude
                    'heatmap-weight': [
                        'interpolate',
                        ['linear'],
                        ['get', thing],
                        0,
                        0,
                        100,
                        1 // This smooths it so that it's weighted up to 1 if magnitude is 6
                    ],
                    // Increase the heatmap color weight weight by zoom level
                    // heatmap-intensity is a multiplier on top of heatmap-weight
                    // This is really just about zoom level and doesn't deeply affect the weighting
                    'heatmap-intensity': [
                        'interpolate',
                        ['linear'],
                        ['zoom'],
                        0,
                        1,
                        9,
                        3
                    ],
                    // Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
                    // Begin color ramp at 0-stop with a 0-transparancy color
                    // to create a blur-like effect.
                    'heatmap-color': [
                        'interpolate',
                        ['linear'],
                        ['heatmap-density'],
                        0,
                        `rgba(${props.color},102,172,0)`,
                        0.2,
                        `rgb(${props.color},169,207)`,
                        0.4,
                        `rgb(${props.color},229,240)`,
                        0.6,
                        `rgb(${props.color},219,199)`,
                        0.8,
                        `rgb(${props.color},138,98)`,
                        1,
                        `rgb(${props.color},24,43)`
                    ],
                    // Adjust the heatmap radius by zoom level
                    'heatmap-radius': [
                        'interpolate',
                        ['linear'],
                        ['zoom'],
                        0,
                        2,
                        9,
                        15
                    ],
                    // Transition from heatmap to circle layer by zoom level
                    'heatmap-opacity': [
                        'interpolate',
                        ['linear'],
                        ['zoom'],
                        7,
                        1,
                        9,
                        0
                    ]
                }
    })
  };
    axios.
    get('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson')
    .then(response=>{
      addDatasets(map,response.data,'earthquakes','mag');
    })
    .catch(error=>{
      console.log(error);
    })
    return ()=>{
      map.remove();
    };
  },[props]);
      
  return (
    <>
      <div ref={mapContainer} style={{width:'100%',height:'90%',marginTop:'20px',position:'absolute'}}/>
    </>
  );
}
export default Map;