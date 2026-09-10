import React from 'react';
import { ChevronDown, Plus, Minus, Layers } from 'lucide-react';

const FieldMapCard = () => {
  return (
    <div className="bg-white rounded-2xl border border-border flex flex-col w-full h-full shadow-sm overflow-hidden">
      <div className="p-3 border-b border-border flex items-center justify-between shrink-0">
        <h2 className="font-semibold text-[15px] text-text-main">Field Map</h2>
        <button className="flex items-center gap-2 text-[13px] font-medium border border-gray-200 rounded-md px-2 py-1 hover:bg-gray-50 transition-colors">
          Zone View
          <ChevronDown size={14} className="text-gray-500" />
        </button>
      </div>
      
      <div className="relative flex-1 min-h-0 bg-gray-100">
        <div className="absolute inset-0 bg-[#2b3a2a] overflow-hidden">
          <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
          
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon points="15,20 45,15 45,40 10,40" fill="#84cc16" fillOpacity="0.4" stroke="#84cc16" strokeWidth="0.5" />
            <polygon points="45,15 75,20 75,45 45,45" fill="#3b82f6" fillOpacity="0.4" stroke="#3b82f6" strokeWidth="0.5" />
            <polygon points="75,20 90,25 90,50 75,45" fill="#8b5cf6" fillOpacity="0.4" stroke="#8b5cf6" strokeWidth="0.5" />
            <polygon points="10,40 45,40 40,70 15,65" fill="#eab308" fillOpacity="0.4" stroke="#eab308" strokeWidth="0.5" />
            <polygon points="40,70 45,40 75,45 70,75 50,75" fill="#06b6d4" fillOpacity="0.4" stroke="#06b6d4" strokeWidth="0.5" />
          </svg>

          <div className="absolute top-[25%] left-[25%] bg-yellow-500 w-2.5 h-2.5 rounded-full border border-white"></div>
          <div className="absolute top-[30%] left-[55%] bg-blue-500 w-2.5 h-2.5 rounded-full border border-white"></div>
          <div className="absolute top-[25%] left-[80%] bg-purple-500 w-2.5 h-2.5 rounded-full border border-white"></div>
          <div className="absolute top-[55%] left-[30%] bg-orange-500 w-2.5 h-2.5 rounded-full border border-white"></div>
          <div className="absolute top-[60%] left-[60%] bg-yellow-500 w-2.5 h-2.5 rounded-full border border-white"></div>

          <div className="absolute top-[25%] left-[25%] -translate-x-1/2 -translate-y-4 text-white text-[10px] font-bold drop-shadow-md">Zone 2</div>
          <div className="absolute top-[30%] left-[55%] -translate-x-1/2 -translate-y-4 text-white text-[10px] font-bold drop-shadow-md">Zone 3</div>
          <div className="absolute top-[25%] left-[80%] -translate-x-1/2 -translate-y-4 text-white text-[10px] font-bold drop-shadow-md">Zone 4</div>
          <div className="absolute top-[55%] left-[30%] -translate-x-1/2 -translate-y-4 text-white text-[10px] font-bold drop-shadow-md">Zone 5</div>
          <div className="absolute top-[60%] left-[60%] -translate-x-1/2 -translate-y-4 text-white text-[10px] font-bold drop-shadow-md">Zone 6</div>
        </div>

        <div className="absolute top-2 left-2 flex flex-col bg-white rounded-md shadow-sm border border-gray-200 overflow-hidden">
          <button className="p-1.5 hover:bg-gray-50 border-b border-gray-200"><Plus size={14} /></button>
          <button className="p-1.5 hover:bg-gray-50"><Minus size={14} /></button>
        </div>
        <div className="absolute bottom-2 left-2">
          <button className="p-1.5 bg-white rounded-md shadow-sm border border-gray-200 hover:bg-gray-50">
            <Layers size={14} />
          </button>
        </div>
        <div className="absolute bottom-2 right-2 text-white text-[10px] font-medium drop-shadow-md flex items-center gap-1">
          <div className="w-6 h-[2px] bg-white"></div>
          50 m
        </div>
      </div>

      <div className="p-2 border-t border-border bg-white grid grid-cols-3 gap-y-2 gap-x-1 text-[10px] shrink-0">
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
