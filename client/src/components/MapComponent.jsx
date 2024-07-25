import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import 'leaflet-routing-machine';
import L from 'leaflet';
import { useEffect, useState } from 'react';


const deliveryIcon = L.icon({
  iconUrl: "src/assets/deliverybox.png", 
  iconSize: [30, 30]
})

const hubIcon = L.icon({
 
  iconUrl : "src/assets/orangedepot.png",
  iconSize: [80, 60]
})

const Map = ({ waypoints }) => {
  const defaultCenter = [53.6458, -1.7850]; // map center
  const map = useMap();
  const [routeInfo, setRouteInfo] = useState({ distance: 0, time: 0 });

  const calculateCenter = () => {
    if (waypoints && waypoints.length > 0) {
      const midIndex = Math.floor((waypoints.length - 1) / waypoints.length);
      const midPoint = waypoints[midIndex];
      return [midPoint.lat, midPoint.lng];
    }
    return defaultCenter;
  };
// calculates the bounds and fits it based on the waypoints, then calculates the center
  useEffect(() => {
    if (waypoints.length > 0) {
      const bounds = L.latLngBounds(waypoints.map(wp => L.latLng(wp.lat, wp.lng)));
      map.fitBounds(bounds);
    } else {
      map.setView(calculateCenter(), 12);
    }
  }, [waypoints, map]); 
  
  useEffect(() => {
    if (waypoints.length > 0) {
      const route = L.Routing.control({
        waypoints: waypoints.map(wp => L.latLng(wp.lat, wp.lng)),
        routeWhileDragging: false,
        addWaypoints: false, 
        lineOptions: {
          styles: [
            {
              color: "blue",
              opacity: 0.6,
              weight: 4,
            },
          ],
        },
        createMarker: function (i, wp) {
          if(i == 0){
            return L.marker(wp.latLng, {icon: hubIcon}).bindPopup(`RainforestRetail Depot`);
          } else {
            return L.marker(wp.latLng, {icon : deliveryIcon}).bindPopup(`Delivery Stop ${i}`);
          }
          
        },
      }).addTo(map);

      route.on('routesfound', function (e) {
        const routes = e.routes;
        const summary = routes[0].summary;
        const distanceKm = summary.totalDistance / 1000;
        const roundedKm = distanceKm.toFixed(2)
        const timeMinutes = Math.round(summary.totalTime % 3600 / 60);

        setRouteInfo({
          distance: roundedKm,
          time: timeMinutes
        });
      });
      return () => map.removeControl(route);
    }
  }, [waypoints, map]);

  return (
    <div className = "map-display" >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <div className='route-info'>
        <p>Total Distance: <br />{routeInfo.distance} km</p>
        <p>Total Time: <br />{routeInfo.time} minutes</p>
      </div>
    </div> 
  );
}

export default Map;
