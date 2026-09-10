import React from 'react';
import { Map, Leaf, TrendingUp, Navigation, Droplet } from 'lucide-react';

const FieldOverviewCard = () => {
  const items = [
    { icon: Map, label: 'Total Area', value: '27.3 acres', iconColor: 'text-green-600' },
    { icon: Leaf, label: 'Crops', value: 'Maize', iconColor: 'text-green-600' },
    { icon: TrendingUp, label: 'Growth Stage', value: 'Vegetative', iconColor: 'text-green-600' },
    { icon: Navigation, label: 'Coverage (Drone)', value: '18.6 acres', iconColor: 'text-green-600' },
    { icon: Droplet, label: 'Next Irrigation', value: 'Tomorrow, 06:00', iconColor: 'text-green-600' },
  ];

  return (
    <div className="bg-white rounded-2xl border border-border flex flex-col shadow-sm w-full h-full overflow-hidden">
      <div className="p-3 border-b border-border shrink-0">
        <h2 className="font-semibold text-[15px] text-text-main">Field Overview</h2>
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

export default FieldOverviewCard;
