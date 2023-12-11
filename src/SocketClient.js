import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import MapView from './MapView';

const App = () => {
    const [newInfo, setNewInfo] = useState('Default Value');
    const [socket, setSocket] = useState(null);
    const [dataPoints, setDataPoints] = useState({});
    const [number, setNumber] = useState(0);

    useEffect(() => {
        const newSocket = io('http://localhost:5001');
        setSocket(newSocket);

        newSocket.on('new_number', (data) => {
            setNewInfo(data.number);

            setNumber(prev => prev + 1);
        });

        fetch('http://localhost:3002/get_panels')
            .then(response => response.json())
            .then(data => {
                setDataPoints({ ...data });
            })
            .catch(error => console.error('Error fetching data:', error));

        setNumber(prev => prev + 1);

        return () => newSocket.close();
    }, []);

    return (
        <div>
            {number}
            <MapView dataPoints={dataPoints} />
        </div>
    );
};

export default App;
