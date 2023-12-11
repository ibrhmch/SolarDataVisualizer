import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import MapView from './MapView';

const App = () => {
    const [socket, setSocket] = useState(null);
    const [dataPoints, setDataPoints] = useState({});

    useEffect(() => {
        const newSocket = io('http://localhost:5001');
        setSocket(newSocket);

        newSocket.on('NewPanelData', (data) => {
            console.log(data);

            // newDatasPoints[data.panelId] = { ...dataPoints[data.panelId], powerKw: data.powerKw }

            setDataPoints(prevDataPoints => {
                const newDataPoints = { ...prevDataPoints };
                newDataPoints[data.panelId] = { ...prevDataPoints[data.panelId], powerKw: data.powerKw }

                return newDataPoints;
            });

        });

        fetch('http://localhost:3002/get_panels')
            .then(response => response.json())
            .then(data => {
                setDataPoints({ ...data });
            })
            .catch(error => console.error('Error fetching data:', error));

        return () => newSocket.close();
    }, []);

    return (
        <div>
            <MapView dataPoints={dataPoints} />
        </div>
    );
};

export default App;
