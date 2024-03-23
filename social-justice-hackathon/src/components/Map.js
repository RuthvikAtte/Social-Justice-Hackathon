// import React from 'react';
// import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
// import HeatmapLayer from '../src/HeatmapLayer';
// import { addressPoints } from './realworld.10000.js';

// export default function HeatMap() {
//     return (
//         <div>
//         <Map center={position} zoom={13} style={{ height: '100%' }} >
//               <LayersControl>
//                 <LayersControl.BaseLayer name="Base" checked>
//                   <TileLayer
//                     url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
//                     attribution="&copy; <a href=http://osm.org/copyright>OpenStreetMap</a> contributors"
//                   />
//                 </LayersControl.BaseLayer>
//                 <LayersControl.Overlay name="Heatmap" checked>
//                   <FeatureGroup color="purple">
//                     <Marker position={[50.05, -0.09]} >
//                       <Popup>
//                         <span>A pretty CSS3 popup.<br /> Easily customizable. </span>
//                       </Popup>
//                     </Marker>
//                     <HeatmapLayer
//                       fitBoundsOnLoad
//                       fitBoundsOnUpdate
//                       points={addressPoints}
//                       longitudeExtractor={m => m[1]}
//                       latitudeExtractor={m => m[0]}
//                       intensityExtractor={m => parseFloat(m[2])}
//                     />
//                   </FeatureGroup>
//                 </LayersControl.Overlay>
//                 <LayersControl.Overlay name="Marker">
//                   <FeatureGroup color="purple">
//                     <Marker position={position} >
//                       <Popup>
//                         <span>A pretty CSS3 popup.<br /> Easily customizable. </span>
//                       </Popup>
//                     </Marker>
//                   </FeatureGroup>
//                 </LayersControl.Overlay>
//               </LayersControl>
//             </Map>
//         </div>
//     );
//   }
  