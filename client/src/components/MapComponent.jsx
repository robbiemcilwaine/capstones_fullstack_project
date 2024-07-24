import { MapContainer, TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css"; 
import 'leaflet-routing-machine'; 
import L from 'leaflet';
import { useEffect } from 'react';

const Map = ({waypoints}) => {
  const center = [53.6458, -1.7850]; // map center

  useEffect(() => {
    const map = L.map('map').setView(center, 13);

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
  }

    return () => map.remove();
  }, [waypoints]);

  return (
    <div id='map'></div>
  );
}

export default Map;
