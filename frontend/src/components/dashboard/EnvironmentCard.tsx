import React from 'react';
import { Thermometer, Droplets, Wind, CloudRain, Droplet, ThermometerSun } from 'lucide-react';
import { useSensorWebSocket } from '../../hooks/useSensorWebSocket';

const EnvironmentCard = () => {
  // Get the live data from the backend
  const { sensorData, isConnected } = useSensorWebSocket();

  // Replace static values with live data if it exists, otherwise fallback to default
  const items = [
    { icon: Thermometer, label: 'Temperature', value: sensorData?.temperature || '32°C', iconColor: 'text-gray-500' },
    { icon: Droplets, label: 'Humidity', value: sensorData?.humidity || '65%', iconColor: 'text-blue-500' },
    { icon: Wind, label: 'Wind Speed', value: sensorData?.windSpeed || '12 km/h', iconColor: 'text-teal-500' },
    { icon: CloudRain, label: 'Rainfall (Today)', value: sensorData?.rainfall || '0 mm', iconColor: 'text-indigo-500' },
    { icon: Droplet, label: 'Soil Moisture', value: sensorData?.soilMoisture || '28%', iconColor: 'text-gray-400' },
    { icon: ThermometerSun, label: 'Soil Temp', value: sensorData?.soilTemp || '29°C', iconColor: 'text-gray-500' },
  ];

  return (
    <div className="bg-white rounded-2xl border border-border flex flex-col shadow-sm w-full h-full overflow-hidden">
      <div className="p-3 border-b border-border shrink-0 flex items-center justify-between">
        <h2 className="font-semibold text-[15px] text-text-main">Environment</h2>
        {/* Added a small indicator to show if the WebSocket is connected */}
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] text-text-muted">{isConnected ? 'Live' : 'Offline'}</span>
          <div className={`w-2 h-2 rounded-full ${isConnected ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></div>
        </div>
      </div>
      
      <div className="p-3 flex flex-col justify-around flex-1 min-h-0">
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="flex items-center justify-between min-h-0">
              <div className="flex items-center gap-2 min-w-0">
                <Icon size={14} className={`${item.iconColor} shrink-0`} />
                <span className="text-[12px] text-text-muted truncate">{item.label}</span>
              </div>
              <span className="text-[12px] font-semibold text-text-main shrink-0 ml-2">{item.value}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EnvironmentCard;