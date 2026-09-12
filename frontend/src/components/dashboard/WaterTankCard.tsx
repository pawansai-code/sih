import React from 'react';
import { Droplets, Info } from 'lucide-react';

const WaterTankCard = () => {
  const percentage = 65;

  return (
    <div className="bg-white rounded-2xl border border-gray-100 flex flex-col shadow-[0_2px_10px_rgba(0,0,0,0.02)] h-full overflow-hidden">
      <div className="p-4 flex items-center justify-between border-b border-gray-50/80 shrink-0">
        <div className="flex items-center gap-2">
          <Droplets className="text-blue-500" size={18} />
          <h2 className="font-semibold text-gray-800 text-sm">Tank Status</h2>
        </div>
        <button className="text-gray-400 hover:text-gray-600 transition-colors">
          <Info size={16} />
        </button>
      </div>
      
      <div className="p-5 flex items-center gap-6 flex-1 justify-center min-h-0">
        {/* Tank Visual (Sleek Pill) */}
        <div className="relative w-12 h-full max-h-24 bg-gray-100 rounded-full shadow-inner overflow-hidden border border-gray-200/50 shrink-0">
          <div 
            className="absolute bottom-0 w-full bg-gradient-to-t from-blue-600 to-cyan-400 rounded-full transition-all duration-1000 ease-in-out"
            style={{ height: `${percentage}%` }}
          >
            {/* Subtle highlight for glass effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent w-1/2"></div>
          </div>
        </div>

        {/* Data */}
        <div className="flex flex-col justify-center shrink-0">
          <div className="flex items-baseline gap-1 leading-none">
            <span className="text-3xl font-bold tracking-tight text-gray-800">{percentage}</span>
            <span className="text-sm font-medium text-gray-500">%</span>
          </div>
          <div className="text-[10px] font-medium text-gray-400 mt-1.5 uppercase tracking-wider">Available</div>
          <div className="text-[13px] font-medium text-gray-700 mt-2">32,500 L <span className="text-gray-400 font-normal">/ 50k L</span></div>
          
          <div className="flex items-center gap-1.5 mt-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.4)]"></span>
            <span className="text-[11px] font-semibold text-emerald-600 tracking-wide uppercase">Optimal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaterTankCard;
