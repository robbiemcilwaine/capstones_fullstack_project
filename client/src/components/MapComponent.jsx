import { MapContainer, TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css"; 
import 'leaflet-routing-machine'; 
import L from 'leaflet';
import { useEffect, useState } from 'react';

const Map = ({waypoints}) => {
  const center = [53.6458, -1.7850]; // map center
  const [routeInfo, setRouteInfo] = useState({ distance: 0, time: 0 });

  useEffect(() => {
    const map = L.map('map').setView(center, 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    if (waypoints.length > 0) {
    const route = L.Routing.control({
      waypoints: waypoints,
      routeWhileDragging: true,
      lineOptions: {
        styles: [
          {
            color: "blue",
            opacity: 0.6,
            weight: 4
          }
        ]
      },
      createMarker: function() { return null; }
    }).addTo(map);

    route.on('routesfound', function(e) {
      const routes = e.routes;
      const summary = routes[0].summary;
      const distanceKm = summary.totalDistance / 1000;
      const timeMinutes = Math.round(summary.totalTime % 3600 / 60);
      
      setRouteInfo({ distance: distanceKm, time: timeMinutes });
    });
  }

    return () => map.remove();
  }, [waypoints]);

  return (
    <div style={{position: 'relative' }}>
        <div
            id='map'
            style={{
                margin: '10vh 0 ' ,
                transform: 'scale(1.5)',
                transformOrigin: 'center'
            }}
        ></div>
        <div>
          <p>Total Distance: {routeInfo.distance} km</p>
          <p>Total Time: {routeInfo.time} minutes</p>
      </div>
    </div>
);
}

export default Map;
