import React from 'react';
import { ChevronRight } from 'lucide-react';

const WaterTankCard = () => {
  return (
    <div className="bg-white rounded-2xl border border-border flex flex-col shadow-sm flex-[2] min-h-0 overflow-hidden">
      <div className="p-3 border-b border-border flex items-center justify-between shrink-0">
        <h2 className="font-semibold text-[15px] text-text-main">Water Tank Status</h2>
        <ChevronRight size={16} className="text-gray-400" />
      </div>
      
      <div className="p-3 flex items-center gap-4 flex-1 min-h-0 justify-center">
        <div className="relative w-12 h-[80%] max-h-16 border-2 border-gray-300 rounded-b-lg border-t-0 flex items-end ml-4 shrink-0">
          <div className="absolute -top-0.5 left-[-2px] right-[-2px] h-[2px] bg-gray-300"></div>
          <div className="absolute top-1.5 -right-3 w-3 h-1.5 border-t-2 border-r-2 border-b-2 border-gray-300 rounded-r-sm border-l-0"></div>
          <div className="w-full bg-cyan-400 rounded-b-sm" style={{ height: '65%' }}></div>
        </div>

        <div className="flex flex-col shrink-0 justify-center h-full">
          <div className="text-xl font-bold text-primary-600 leading-tight">65%</div>
          <div className="text-[11px] text-text-muted">Storage</div>
          <div className="text-[12px] font-medium text-text-main mt-1 leading-tight">32,500 L / 50,000 L</div>
          <div className="text-[12px] font-semibold text-primary-600 leading-tight">Good</div>
        </div>
      </div>
    </div>
  );
};

export default WaterTankCard;
