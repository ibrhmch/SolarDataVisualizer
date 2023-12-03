import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';

import 'leaflet/dist/leaflet.css';



const MapView = () => {
    const position = [40.00719953657654, -105.26308100217875]; // Latitude and Longitude of Engineering Center

    const customIcon = new Icon({
        iconUrl: '/mapMarker.png', // Replace with the path to your image
        iconSize: [25, 25], // Size of the icon
    });

    // Example data points
    const dataPoints = [
        { id: 1, position: [40.007259752621174, -105.26350055410776], info: 'Engineering Center' },
        { id: 2, position: [40.00389502140387, -105.26616659936727], info: 'Center For Community' },
        // Add more points here
    ];



    return (
        <div>
            <div className="flex justify-center items-center w-screen h-screen">
                <MapContainer center={position} zoom={13} style={{ height: '70vh', width: '70%' }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {dataPoints.map(point => (
                        <Marker key={point.id} position={point.position} icon={customIcon}>
                            <Popup>{point.info}</Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
        </div>
    );
};

export default MapView;

