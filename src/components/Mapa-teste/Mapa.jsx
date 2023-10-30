import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function Mapa() {
  const [position, setPosition] = useState([-22.9083, -43.1964]); // Coordenadas iniciais

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((geoPosition) => {
        const { latitude, longitude } = geoPosition.coords;
        setPosition([latitude, longitude]); // Atualiza as coordenadas com a localização do usuário
      });
    }
  }, []);

  return (
    <div style={{ height: '100vh' }}>
      <MapContainer center={position} zoom={13} style={{ height: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            Localização atual do usuário.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Mapa;