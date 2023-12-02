import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapView = () => {
    const position = [40.00719953657654, -105.26308100217875]; // Latitude and Longitude of Engineering Center

    return (
        <div>
            <div className="flex justify-center items-center w-screen h-screen">
                <MapContainer center={position} zoom={13} style={{ height: '70vh', width: '70%' }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {/* Points will be added here in the future */}
                </MapContainer>
            </div>
        </div>
    );
};

export default MapView;

