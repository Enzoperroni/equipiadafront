import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
function RioDeJaneiroMap() {
  const position = [-22.9083, -43.1964]; // Coordenadas do Rio de Janeiro

  return (
    <MapContainer center={position} zoom={11} style={{ width: '100%', height: '990px'}}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>Rio de Janeiro</Popup>
      </Marker>
    </MapContainer>
  );
}

export default RioDeJaneiroMap;