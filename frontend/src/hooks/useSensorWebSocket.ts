import { useEffect, useState } from 'react';

export const useSensorWebSocket = () => {
  // State to hold the live data coming from the backend
  const [sensorData, setSensorData] = useState<any>(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    // 1. Connect to the FastAPI WebSocket endpoint
    const ws = new WebSocket('ws://localhost:8000/ws/sensors');

    ws.onopen = () => {
      console.log('Connected to Sensor WebSocket');
      setIsConnected(true);
    };

    // 2. Listen for incoming messages from the backend
    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        setSensorData(data); // Update state with the live data
      } catch (e) {
        console.log('Received raw message:', event.data);
      }
    };

    ws.onclose = () => {
      console.log('Disconnected from Sensor WebSocket');
      setIsConnected(false);
    };

    // 3. Cleanup the connection when the component unmounts
    return () => {
      ws.close();
    };
  }, []);

  return { sensorData, isConnected };
};
