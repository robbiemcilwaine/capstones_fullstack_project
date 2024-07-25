import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import "leaflet/dist/leaflet.css"; 
import 'leaflet-routing-machine'; 
import L from 'leaflet';
import { useEffect } from 'react';

const Map = ({waypoints}) => {
  const defaultCenter = [53.6458, -1.7850]; // map center
  const map = useMap();

  const calculateCenter = () => {
    if (waypoints && waypoints.length > 0) {
      const midIndex = Math.floor((waypoints.length - 1) / 2);
      const midPoint = waypoints[midIndex];
      return [midPoint.lat, midPoint.lng];
    }
    return defaultCenter;
  };
  // calculates the bounds and fits it based on the waypoints, then calculates the center 
  useEffect(() => {
    const map = L.map('map').setView(center, 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    if (waypoints.length > 0) {
      const bounds = L.latLngBounds(waypoints.map(wp => L.latLng(wp.lat, wp.lng)));
      map.fitBounds(bounds);
    } else {
      map.setView(calculateCenter(), 12);
    }
  }, [waypoints, map]);

  // same as before
  useEffect(() => {
    if (waypoints.length > 0) {
      const route = L.Routing.control({
        waypoints: waypoints.map(wp => L.latLng(wp.lat, wp.lng)),
        routeWhileDragging: true,
        lineOptions: {
          styles: [
            {
              color: "blue",
              opacity: 0.6,
              weight: 4,
            },
          ],
        },
        createMarker: function () {
          return null;
        },
      }).addTo(map);
      return () => map.removeControl(route);
    }
  }, [waypoints, map]);

  return (
    <div style={{ position: "relative", height: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
    </div>
  );
}

export default Map;
