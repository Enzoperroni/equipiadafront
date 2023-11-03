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
  const Predio3 = [
    {
      position: [-22.9043, -43.2300], // Exemplo de posição
      icon: IconLocation, // Ícone personalizado
      
    }
  ];

  const Predio4 = [
    {
      position: [-22.9243, -43.2300], // Exemplo de posição
      icon: IconLocation, // Ícone personalizado
      
    }
  ];


  return (
    <MapContainer
      center={userLocation || defaultPosition}
      zoom={11}
      style={{ width: '100%', height: '150px'}}
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
       {Predio3.map((marker, index) => (
        <Marker
          key={index}
          position={marker.position}
          icon={marker.icon}
        >
          <Popup><CorLetra>Predio 3</CorLetra><PredioImagem src="https://www.universocondominio.com.br/wp-content/uploads/2021/08/x94691101_RIRio-de-Janeiro-06-08-2021Painel-da-grafiteira-Rafa-Ramon-na-praia-de-Botafogo-48.jpg.pagespeed.ic_.HomosutQaK.jpg"/></Popup>
        </Marker>
      ))}
       {Predio4.map((marker, index) => (
        <Marker
          key={index}
          position={marker.position}
          icon={marker.icon}
        >
          <Popup><CorLetra>Predio 4 </CorLetra><PredioImagem src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMzjXFKnUXoF-OQ-yZu-lSBTpZlsoRGv-bIg&usqp=CAU"/></Popup>
        </Marker>
      ))}
    </MapContainer>
  );
} 

export default PostMapa;