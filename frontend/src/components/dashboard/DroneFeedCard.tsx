import React from 'react';
import { ChevronRight } from 'lucide-react';

const DroneFeedCard = () => {
  return (
    <div className="bg-white rounded-2xl border border-border flex flex-col w-full h-full shadow-sm overflow-hidden">
      <div className="p-3 border-b border-border shrink-0">
        <h2 className="font-semibold text-[15px] text-text-main">Drone Live Feed</h2>
      </div>
      
      <div className="p-3 flex flex-col gap-3 flex-1 min-h-0">
        <div className="relative rounded-lg overflow-hidden bg-[#3a523a] w-full flex-1 min-h-0 flex items-center justify-center">
          <div className="absolute inset-0 opacity-30 flex flex-col justify-around">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="w-full h-1 bg-black rotate-[-15deg] scale-150 transform origin-left"></div>
            ))}
          </div>
          <div className="absolute top-2 right-2 bg-green-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center gap-1 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
            Live
          </div>
        </div>

        <div className="shrink-0 h-1/3 min-h-[100px] flex flex-col">
          <div className="flex items-center justify-between mb-2 shrink-0">
            <h3 className="font-semibold text-[13px] text-text-main">Detected Issues</h3>
            <button className="text-primary-600 text-[11px] font-medium hover:text-primary-700">View All</button>
          </div>
          
          <div className="grid grid-cols-3 gap-2 flex-1 min-h-0">
            <div className="flex flex-col gap-1 min-h-0 h-full">
              <div className="bg-green-100 rounded-md flex-1 min-h-0 relative overflow-hidden border border-green-200">
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1587334274328-64186a80aeb6?auto=format&fit=crop&q=80&w=200')] bg-cover bg-center"></div>
                <div className="absolute bottom-1 left-1 w-3 h-3 bg-red-500 rounded-full border border-white flex items-center justify-center">
                  <span className="text-[7px] text-white font-bold">!</span>
                </div>
              </div>
              <div className="text-[10px] font-medium text-text-main leading-none mt-0.5 truncate">Fall Armyworm</div>
              <div className="flex justify-between items-center">
                <div className="text-[9px] text-text-muted">Zone 2</div>
                <div className="text-[9px] text-gray-400">10:28 AM</div>
              </div>
            </div>

            <div className="flex flex-col gap-1 min-h-0 h-full">
              <div className="bg-green-100 rounded-md flex-1 min-h-0 relative overflow-hidden border border-green-200">
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1530836369250-ef71a35921bf?auto=format&fit=crop&q=80&w=200')] bg-cover bg-center"></div>
                <div className="absolute bottom-1 left-1 w-3 h-3 bg-yellow-500 rounded-full border border-white flex items-center justify-center">
                  <span className="text-[7px] text-white font-bold">!</span>
                </div>
              </div>
              <div className="text-[10px] font-medium text-text-main leading-none mt-0.5 truncate">Leaf Blight</div>
               <div className="flex justify-between items-center">
                <div className="text-[9px] text-text-muted">Zone 4</div>
                <div className="text-[9px] text-gray-400">10:25 AM</div>
              </div>
            </div>

            <div className="flex flex-col gap-1 min-h-0 h-full">
              <div className="bg-green-100 rounded-md flex-1 min-h-0 relative overflow-hidden border border-green-200">
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1595867909337-b67367ce5e82?auto=format&fit=crop&q=80&w=200')] bg-cover bg-center"></div>
                <div className="absolute bottom-1 left-1 w-3 h-3 bg-purple-500 rounded-full border border-white flex items-center justify-center">
                  <span className="text-[7px] text-white font-bold">!</span>
                </div>
              </div>
              <div className="text-[10px] font-medium text-text-main leading-none mt-0.5 truncate">Nitrogen Def.</div>
               <div className="flex justify-between items-center">
                <div className="text-[9px] text-text-muted">Zone 3</div>
                <div className="text-[9px] text-gray-400">10:20 AM</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DroneFeedCard;
