import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import {PredioImagem,CorLetra} from './PredioImagem';
import IconLocation from './IconLocation';
import IconAtualLocation from './IconAtualLocation';

function PostMapa() {
  const [userLocation, setUserLocation] = useState(null);

  // Use the Geolocation API to get the user's location
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation([latitude, longitude]);
      });
    }
  }, []);

  const defaultPosition = [-22.9083, -43.1964]; // Default position (Rio de Janeiro)

  // Array de marcadores adicionais
  const Predio2 = [
    {
      position: [-22.9083, -43.1964], // Exemplo de posição
      icon: IconLocation, // Ícone personalizado
      
    }
  ];



  return (
    <MapContainer
      center={userLocation || defaultPosition}
      zoom={11}
      style={{ width: '100%', height: '170px'}}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {userLocation && (
        <Marker position={userLocation} icon={IconAtualLocation}>
          <Popup><h3>Minha Localização</h3></Popup>
        </Marker>
      )}
      {Predio2.map((marker, index) => (
        <Marker
          key={index}
          position={marker.position}
          icon={marker.icon}
        >
          <Popup><CorLetra>Predio 2</CorLetra><PredioImagem src="https://ogimg.infoglobo.com.br/in/25005686-db4-e39/FT1086A/760/BotafogoEmpresas.jpg"/></Popup>
        </Marker>
      ))}
       
      
    </MapContainer>
  );
} 

export default PostMapa;