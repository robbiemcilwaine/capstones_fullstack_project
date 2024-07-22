import './App.css';
import {MapContainer, TileLayer, Marker, Popup, useMap} from 'react-leaflet';
import "leaflet/dist/leaflet.css"; 
import 'leaflet-routing-machine'; 
import L from 'leaflet';
import { useState, useEffect } from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ParentContainer from './containers/ParentContainer'

function App() {
  return (
    <>
    <ParentContainer/>
    </>
  )
}
export default App; 