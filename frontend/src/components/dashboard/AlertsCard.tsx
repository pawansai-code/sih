import React from 'react';

const AlertsCard = () => {
  const alerts = [
    { icon: '!', color: 'bg-red-100 text-red-500', text: 'Fall Armyworm detected in Zone 2', time: '10:28 AM' },
    { icon: '💧', color: 'bg-blue-100 text-blue-500', text: 'Irrigation required in Zone 5', time: '10:15 AM' },
    { icon: '🌊', color: 'bg-cyan-100 text-cyan-500', text: 'Low water level in Farm Pond', time: '09:50 AM' },
    { icon: '🌡️', color: 'bg-orange-100 text-orange-500', text: 'Heat stress alert in Zone 1', time: '09:30 AM' },
    { icon: '🧪', color: 'bg-purple-100 text-purple-500', text: 'Nitrogen deficiency in Zone 3', time: '09:10 AM' },
  ];

  return (
    <div className="bg-white rounded-2xl border border-border flex flex-col shadow-sm w-full h-full overflow-hidden">
      <div className="p-3 border-b border-border flex items-center justify-between shrink-0">
        <h2 className="font-semibold text-[15px] text-text-main">Alerts (6)</h2>
        <button className="text-primary-600 text-[11px] font-medium hover:text-primary-700">View All</button>
      </div>
      
      <div className="p-3 flex flex-col gap-2 flex-1 min-h-0 overflow-y-auto">
        {alerts.map((alert, index) => (
          <div key={index} className="flex items-center justify-between gap-2 pb-2 border-b border-gray-100 last:border-0 last:pb-0">
            <div className="flex items-center gap-2 min-w-0">
              <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] shrink-0 ${alert.color}`}>
                {alert.icon}
              </div>
              <span className="text-[12px] text-text-main font-medium truncate">{alert.text}</span>
            </div>
            <span className="text-[10px] text-text-muted shrink-0">{alert.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlertsCard;
