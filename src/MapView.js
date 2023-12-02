import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapView = () => {
    const position = [51.505, -0.09]; // Latitude and Longitude of London

    return (
        <MapContainer center={position} zoom={13} style={{ height: '100vh', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {/* Points will be added here in the future */}
        </MapContainer>
    );
};

export default MapView;
