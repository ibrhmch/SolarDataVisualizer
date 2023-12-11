import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, useMap } from 'react-leaflet';
import { Icon } from 'leaflet';

import 'leaflet/dist/leaflet.css';

const customIcon = new Icon({
    iconUrl: '/mapMarker.png', // Replace with the path to your image
    iconSize: [25, 25], // Size of the icon
});

const MapView = ({ dataPoints = {} }) => {
    const [mapCenter, setMapCenter] = useState([40.007259752621174, -105.26350055410776]);

    console.log(dataPoints);
    console.log(Object.keys(dataPoints).length);

    return (
        <div>
            {Object.keys(dataPoints).length > 0 && (
                <div className="flex justify-center items-center w-screen h-screen">
                    <MapContainer center={mapCenter} zoom={13} style={{ height: '70vh', width: '70%' }}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                        {Object.entries(dataPoints).map(([panelId, details]) => (
                            < Marker key={panelId} position={[details.latitude, details.longitude]} icon={customIcon} >
                                <Popup>
                                    <div key={panelId}>
                                        <h3>Panel ID: {panelId}</h3>
                                        <p>Name: {details.name}</p>
                                        <p>Power Produced: {details.powerKw}</p>
                                    </div>
                                </Popup>
                            </Marker>

                        ))}
                    </MapContainer>
                </div>
            )
            }
        </div >
    );
};

export default MapView;

