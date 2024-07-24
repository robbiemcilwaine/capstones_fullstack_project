import {MapContainer, TileLayer, Marker, Popup, useMap} from 'react-leaflet';
import "leaflet/dist/leaflet.css"; 
import 'leaflet-routing-machine'; 
import L from 'leaflet';
import { useEffect } from 'react';

const Map = () => {
const center = [53.6458, -1.7850]; //map center
  // const position = [51.505, -0.09]; //marker 

 const waypoints = [
        L.latLng(53.66539, -1.77481),  //
        L.latLng(53.66803, -1.77223)  //
    ];
useEffect(() => {
  const map = L.map('map').setView(center, 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  const route = L.Routing.control({
    waypoints : waypoints,
    routeWhileDragging: true,
    lineOptions: {
      styles: [
        {
          color: "blue",
          opacity: 0.6,
          weight: 4
        }
      ]
    
    },createMarker: function() { return null; }
}).addTo(map);

return()=> map.remove();
},[center, waypoints]);

  

return (
    <>
      <div id = 'map'>



      </div>
    </>

)
}

export default Map; 