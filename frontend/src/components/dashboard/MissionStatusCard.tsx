import React from 'react';
import { Plane } from 'lucide-react';

const MissionStatusCard = () => {
  return (
    <div className="bg-white rounded-2xl border border-border flex flex-col shadow-sm w-full h-full overflow-hidden">
      <div className="p-3 border-b border-border shrink-0">
        <h2 className="font-semibold text-[15px] text-text-main">Drone Mission Status</h2>
      </div>
      
      <div className="p-3 flex flex-col justify-between flex-1 min-h-0">
        <div className="shrink-0 mb-2">
          <div className="text-[10px] font-medium text-primary-600 mb-0.5">Active Mission</div>
          <div className="text-[13px] font-semibold text-text-main truncate">Mapping & Crop Monitoring</div>
        </div>

        <div className="flex items-center gap-3 shrink-0 mb-3">
          <Plane size={20} className="text-gray-600 shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="flex justify-between text-[11px] mb-1">
              <span className="text-text-muted">Progress</span>
              <span className="font-semibold text-primary-600">68%</span>
            </div>
            <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-primary-500 rounded-full" style={{ width: '68%' }}></div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-1.5 shrink-0 mb-2">
          <div className="flex justify-between text-[12px]">
            <span className="text-text-muted truncate">Area Covered</span>
            <span className="font-medium shrink-0 ml-2">18.6 / 27.3 acres</span>
          </div>
          <div className="flex justify-between text-[12px]">
            <span className="text-text-muted">Flight Time</span>
            <span className="font-medium">18:45</span>
          </div>
          <div className="flex justify-between text-[12px]">
            <span className="text-text-muted">Battery</span>
            <span className="font-medium">72%</span>
          </div>
        </div>

        <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-1.5 rounded-lg transition-colors text-[12px] shrink-0 mt-auto">
          Pause Mission
        </button>
      </div>
    </div>
  );
};

export default MissionStatusCard;
