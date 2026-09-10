import React, { useEffect } from 'react';
import { ChevronDown, Layers } from 'lucide-react';
import { MapContainer, TileLayer, Polygon, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix leaflet marker icon issue in React
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const FieldMapCard = () => {
  // Center coordinates for the field (e.g., somewhere in India)
  const center: [number, number] = [21.1458, 79.0882];

  // Define some polygon zones to match the previous UI style
  const zones = [
    { id: 2, positions: [[21.145, 79.088], [21.147, 79.088], [21.147, 79.085], [21.145, 79.085]] as [number, number][], color: '#84cc16' },
    { id: 3, positions: [[21.145, 79.088], [21.147, 79.088], [21.147, 79.091], [21.145, 79.091]] as [number, number][], color: '#3b82f6' },
    { id: 4, positions: [[21.145, 79.091], [21.143, 79.091], [21.143, 79.088], [21.145, 79.088]] as [number, number][], color: '#8b5cf6' },
    { id: 5, positions: [[21.145, 79.088], [21.143, 79.088], [21.143, 79.085], [21.145, 79.085]] as [number, number][], color: '#eab308' },
    { id: 6, positions: [[21.143, 79.085], [21.141, 79.085], [21.141, 79.088], [21.143, 79.088]] as [number, number][], color: '#06b6d4' },
  ];

  return (
    <div className="bg-white rounded-2xl border border-border flex flex-col w-full h-full shadow-sm overflow-hidden">
      <div className="p-3 border-b border-border flex items-center justify-between shrink-0 z-10 relative">
        <h2 className="font-semibold text-[15px] text-text-main">Field Map (Live)</h2>
        <button className="flex items-center gap-2 text-[13px] font-medium border border-gray-200 rounded-md px-2 py-1 hover:bg-gray-50 transition-colors">
          Zone View
          <ChevronDown size={14} className="text-gray-500" />
        </button>
      </div>
      
      <div className="relative flex-1 min-h-0 bg-gray-100 z-0">
        <MapContainer center={center} zoom={15} style={{ height: '100%', width: '100%', zIndex: 0 }} zoomControl={false}>
          {/* Satellite Imagery Tile Layer */}
          <TileLayer
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            attribution="Tiles &copy; Esri"
          />
          {zones.map((zone) => (
            <Polygon key={zone.id} positions={zone.positions} pathOptions={{ color: zone.color, fillColor: zone.color, fillOpacity: 0.4 }}>
              <Tooltip permanent direction="center" className="bg-transparent border-none shadow-none text-white font-bold drop-shadow-md text-[10px]">
                Zone {zone.id}
              </Tooltip>
            </Polygon>
          ))}
        </MapContainer>
        
        <div className="absolute bottom-2 left-2 z-[400]">
          <button className="p-1.5 bg-white rounded-md shadow-sm border border-gray-200 hover:bg-gray-50 text-gray-700">
            <Layers size={14} />
          </button>
        </div>
      </div>

      <div className="p-2 border-t border-border bg-white grid grid-cols-3 gap-y-2 gap-x-1 text-[10px] shrink-0 z-10 relative">
        <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-red-500 shrink-0"></span><span className="truncate">Pest Detected</span></div>
        <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-yellow-500 shrink-0"></span><span className="truncate">Disease Detected</span></div>
        <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-purple-500 shrink-0"></span><span className="truncate">Nutrient Def.</span></div>
        <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-blue-500 shrink-0"></span><span className="truncate">Irrigation Req.</span></div>
        <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-cyan-500 shrink-0"></span><span className="truncate">Water Low</span></div>
        <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-orange-500 shrink-0"></span><span className="truncate">Heat Stress</span></div>
      </div>
    </div>
  );
};

export default FieldMapCard;
