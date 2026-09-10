import React from 'react';
import { ChevronDown, Info } from 'lucide-react';

const HeatMapCard = () => {
  return (
    <div className="bg-white rounded-2xl border border-border flex flex-col shadow-sm flex-[3] min-h-0 overflow-hidden">
      <div className="p-3 border-b border-border flex items-center justify-between shrink-0">
        <h2 className="font-semibold text-[15px] text-text-main">Heat Map <span className="text-[13px] font-normal text-text-muted">(Soil Moisture)</span></h2>
      </div>
      
      <div className="p-3 flex-1 min-h-0 flex flex-col gap-2">
        <div className="relative rounded-lg overflow-hidden bg-gray-900 flex-1 min-h-0 flex items-center justify-center">
          <div className="w-3/4 h-3/4 opacity-80" style={{
            background: 'radial-gradient(circle at 30% 30%, #ef4444 0%, #f59e0b 20%, #84cc16 40%, #06b6d4 70%, #3b82f6 100%)',
            filter: 'blur(10px)',
            borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%'
          }}></div>
          
          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col items-center gap-1 bg-white/10 backdrop-blur-sm p-1 rounded-full">
            <span className="text-[8px] text-white font-medium">High</span>
            <div className="w-1.5 h-16 rounded-full" style={{
              background: 'linear-gradient(to bottom, #ef4444, #f59e0b, #84cc16, #06b6d4, #3b82f6)'
            }}></div>
            <span className="text-[8px] text-white font-medium">Low</span>
          </div>
        </div>

        <div className="flex items-center justify-between shrink-0">
          <button className="flex items-center gap-1.5 text-[11px] font-medium border border-gray-200 rounded-md px-2 py-1 hover:bg-gray-50 transition-colors">
            Soil Moisture
            <ChevronDown size={14} className="text-gray-500" />
          </button>
          <Info size={14} className="text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default HeatMapCard;
