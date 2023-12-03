import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import { Icon } from 'leaflet';

import 'leaflet/dist/leaflet.css';

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

const MapView = () => {
    const [mapCenter, setMapCenter] = useState([39.73887641288653, -104.98464946096463]);
    const [position, setPosition] = useState([]);

    function LocationMarker() {
        const map = useMapEvents({
            click() {
                setPosition([...dataPoints]);
                console.log(position);
                setMapCenter([40.007259752621174, -105.26350055410776])
                map.flyTo([40.007259752621174, -105.26350055410776], map.getZoom());
            }
        });

        return position.length === 0 ? null : position.map((point) => (
            <Marker key={point.id} position={point.position} icon={customIcon}>
                <Popup>{point.info}</Popup>
            </Marker>
        ));
    }

    return (
        <div>
            <div className="flex justify-center items-center w-screen h-screen">
                <MapContainer center={mapCenter} zoom={13} style={{ height: '70vh', width: '70%' }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <LocationMarker />
                </MapContainer>
            </div>
        </div>
    );
};

export default MapView;

