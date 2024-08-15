import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Dashboard = () => {
  const positions = [
    { lat: 51.505, lng: -0.09, product: 'Electronics' },
    { lat: 51.515, lng: -0.1, product: 'Clothing' },
  ];

  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {positions.map((position, index) => (
        <Marker key={index} position={[position.lat, position.lng]}>
          <Popup>{position.product}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Dashboard;
