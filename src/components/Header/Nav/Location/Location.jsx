import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import './Location.css';

import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

export default function Location() {
  const position = [
    [41.352376, 69.140633],
    [41.342318, 69.23065]
  ];

  // Функция для изменения стилей элементов управления
  const toggleLeafletControls = (show) => {
    const controlContainers = document.querySelectorAll('.leaflet-control-container');
    controlContainers.forEach(container => {
      container.style.display = show ? 'block' : 'none';
    });
  };

  const map1 = () => {
    const latitude = 41.3423;
    const longitude = 69.2306;
    const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
    
    window.open(url, '_blank');
  };

  const map2 = () => {
    const latitude1 = 41.3524;
    const longitude1 = 69.1406;
    const url = `https://www.google.com/maps?q=${latitude1},${longitude1}`;
    
    window.open(url, '_blank');
  };

  return (
    <div className="map-container">
      <div className="map-location">
        <h2>Наш магазин.</h2>
        <div className="map-box">
          <MapContainer
            center={position[1]}
            zoom={13}
            scrollWheelZoom={false}
            className='map'
            whenCreated={mapInstance => toggleLeafletControls(false)} 
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position[1]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>

          <div className="btn-box">
            <button className='map-btn'   onClick={map1}>Google Map</button>
          </div>
        </div>
      </div>
      <div className="map-location">
        <h2>Наш цех.</h2>
        <div className="map-box">
          <MapContainer
            center={position[0]}
            zoom={13}
            scrollWheelZoom={false}
            className='map'
            whenCreated={mapInstance => toggleLeafletControls(false)} 
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position[0]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>

          <div className="btn-box">
            <button className='map-btn'   onClick={map2}>Google Map</button>
          </div>
        </div>
      </div>
    </div>
  );
}
